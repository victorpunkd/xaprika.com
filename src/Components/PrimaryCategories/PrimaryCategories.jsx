import React, { Component } from "react";
import "./PrimaryCategories.css";
import { CategoryCard } from "../CategoryCard/CategoryCard";

export class PrimaryCategories extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Breakfast Items",
          picture:
            "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/primaryCategoryImages/breakfast.jpg",
        },
        {
          id: 2,
          name: "Beverages",
          picture:
            "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/primaryCategoryImages/beverages.jpg",
        },
        {
          id: 3,
          name: "Pulses",
          picture:
            "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/primaryCategoryImages/rice.jpg",
        },
        {
          id: 4,
          name: "Fish & Meat",
          picture:
            "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/primaryCategoryImages/fish.jpeg",
        },
        {
          id: 5,
          name: "Butter & Cheese",
          picture:
            "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/primaryCategoryImages/butter.jpg",
        },
        {
          id: 6,
          name: "Vegetables",
          picture:
            "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/primaryCategoryImages/veg.jpg",
        },
      ],
    };
  }
  render() {
    return (
      <div className="primaryCategoryContanier w3-row-padding">
        {this.state.data.map((data) => (
          <div className="s6 w3-col categoryContainer">
            <CategoryCard
              categoryName={data.name}
              categoryImage={data.picture}
              categoryId={data.id}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default PrimaryCategories;
