import React, { Component } from "react";
import "./CategoryCard.css";

export class CategoryCard extends Component {
  render() {
    return (
      <div className="categoryCard w3-card">
        <div className="categoryImageContainer">
          <img
            src={this.props.categoryImage}
            alt={`xaprika-${this.props.categoryName}-flat-illustartion`}
            className="primaryCategoryImage"
          />
        </div>
        <div className="categoryName">{this.props.categoryName}</div>
      </div>
    );
  }
}

export default CategoryCard;
