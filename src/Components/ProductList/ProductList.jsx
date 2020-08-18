import React from "react";
import "./ProductList.css";
import Loader from "../Loader/Loader";
import NoDataFound from "../NoDataFound/NoDataFound";
import Error from "../Error/Error";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = (props) => {
  return (
    <div className="productListContainer">
      <div className="w3-row">
        {props.products.isLoaded ? (
          props.products.error ? (
            <Error errorMessage={props.products.errorMessage} />
          ) : props.products.data.length ? (
            props.products.data.map((data) => (
              <div
                key={data.product_id}
                className="s12 w3-col productContainer"
              >
                <ProductCard
                  name={data.product_name}
                  brand={data.product_brand}
                  price={data.product_sale_price}
                  picture={data.product_image}
                  productQuantity={data.product_quantity}
                  productQuantityUnit={data.product_quantity_unit}
                  id={data.product_id}
                />
              </div>
            ))
          ) : (
            <NoDataFound />
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ProductList;
