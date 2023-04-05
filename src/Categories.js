import React from "react";

const Categories = ({ filterFun, recentCategories }) => {
  return (
    <div className="btn-container">
      {recentCategories.map((eachCategories) => {
        return (
          <button
            className="filter-btn"
            onClick={() => filterFun(`${eachCategories}`)}
          >
            {eachCategories}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
