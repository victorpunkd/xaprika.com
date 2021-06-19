import React from "react";
import "./ProductList.css";
import Loader from "../Loader/Loader";
import NoDataFound from "../NoDataFound/NoDataFound";
import Error from "../Error/Error";
import EndOfThePage from "../EndOfThePage/EndOfThePage";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = (props) => {
  return (
    <div className="productListContainer">
      <div className="w3-row">
        {props.products.isLoaded ? (
          props.products.error ? (
            <Error errorMessage={props.products.errorMessage} />
          ) : props.products.data.length ? (
            <>
              {props.products.data.map((data) => (
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
                    inStock={
                      props.currentActivePage === "orderDetails"
                        ? 1
                        : data.in_stock
                    }
                    currentActivePage={props.currentActivePage}
                    selling_price={
                      props.currentActivePage === "orderDetails"
                        ? data.selling_price
                        : ""
                    }
                    consolidated_price={
                      props.currentActivePage === "orderDetails"
                        ? data.consolidated_price
                        : ""
                    }
                    product_count={
                      props.currentActivePage === "orderDetails"
                        ? data.product_count
                        : ""
                    }
                  />
                </div>
              ))}
              <div>
                <EndOfThePage />
              </div>
            </>
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
