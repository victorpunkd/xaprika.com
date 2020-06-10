import React from "react";
import "./SubCategoryList.css";
import CategoryCard from "../CategoryCard/CategoryCard";

const SubCategoryList = () => {
  const subCategories = [
    {
      id: 1,
      name: "Milk",
      picture:
        "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/subCategoryImages/milk.jpg",
    },
    {
      id: 2,
      name: "Bread",
      picture:
        "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/subCategoryImages/bread.jpg",
    },
    {
      id: 3,
      name: "Butter",
      picture:
        "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/subCategoryImages/butter.jpg",
    },
    {
      id: 4,
      name: "Biscuit",
      picture:
        "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/subCategoryImages/biscuit.jpg",
    },
    {
      id: 5,
      name: "Cake",
      picture:
        "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/subCategoryImages/cake.jpg",
    },
    {
      id: 6,
      name: "Paneer",
      picture:
        "https://xaprika-file-storage.s3.us-east-2.amazonaws.com/staticImages/subCategoryImages/paneer.jpg",
    },
  ];
  return (
    <div className="subCategoryListContainer">
      <div className="subCategoryListHeading">Shop by Sub Category</div>
      <div className="subCategories w3-row-padding">
        {subCategories.map((data) => (
          <div className="w3-col s4 categoryContainer">
            <CategoryCard
              key={data.id}
              categoryName={data.name}
              categoryImage={data.picture}
              categoryId={data.id}
              isPrimaryCategory={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryList;
