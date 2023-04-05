import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const allCategories = new Set(items.map((item) => item.category));//here we used set Data Structure & it is an object in Js
  const recentCategories = ["all", ...allCategories];
  
  const filterFun = (category) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => category === item.category);
      setMenuItems(newItems);
    }
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterFun={filterFun} recentCategories={recentCategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
