import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { Link } from "react-router-dom";
import CurrentPageNameHeader from "../CurrentPageNameHeader/CurrentPageNameHeader";
import ProductList from "../ProductList/ProductList";
import { fetchProductsUnderCart } from "../../Actions/FetchProductsUnderCart";
import Loader from "../Loader/Loader";

const Cart = () => {
  const dispatched = useDispatch();
  const { productsUnderCart, cartData } = useSelector((state) => state);
  useEffect(() => {
    dispatched(fetchProductsUnderCart(cartData));
  }, [cartData, dispatched]);
  return (
    <div className="cartContainer w3-animate-opacity">
      <CurrentPageNameHeader categoryName="Cart" />
      <div>
        {console.log(productsUnderCart)}
        {productsUnderCart.error && "Sorry we faced some error"}
        {productsUnderCart.isLoaded && !productsUnderCart.error ? (
          <ProductList products={productsUnderCart.data} />
        ) : (
          <Loader />
        )}
      </div>
      <div className="cartFooter w3-card w3-row">
        <div className="s9 w3-col totalAmountInCart">
          <div className="totalAmountText">
            Total Amount - <span className="cartAmount">290</span>
          </div>
        </div>
        <div className="s3 w3-col">
          <Link to="/Checkout">
            <button className="primaryButton">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
