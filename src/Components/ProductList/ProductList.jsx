import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductList.css";
import Loader from "../Loader/Loader";
import ProductCard from "../ProductCard/ProductCard";
import { fetchProductData } from "../../Actions/FetchProductData";

const ProductList = (props) => {
  const dispatched = useDispatch();
  const { productData } = useSelector((state) => state);
  useEffect(() => {
    dispatched(fetchProductData(props.categoryLink));
  }, [props.categoryLink, dispatched]);
  // const products = [
  //   {
  //     id: 1,
  //     name: "Amul Butter",
  //     brand: "Amul",
  //     price: 48,
  //     picture:
  //       "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/productImages/amul-butter.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Good Day Nuts Cookies Biscuits",
  //     brand: "Britannia",
  //     price: 30,
  //     picture:
  //       "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/productImages/biscuit.jpg",
  //   },
  // ];

  if (!productData.isLoaded) {
    return <Loader />;
  } else {
    return (
      <div className="productListContainer">
        <div className="w3-row">
          {productData.data.map((data) => (
            <div className="s12 w3-col productContainer">
              <ProductCard
                key={data.product_id}
                name={data.product_name}
                brand={data.product_brand}
                price={data.product_mrp}
                picture={data.product_image}
                id={data.product_id}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ProductList;
