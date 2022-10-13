import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Categorys from "./components/Categorys";
import Card from "./components/Card";
import { useState } from "react";
import { menuItems } from "./data";

const App = () => {
  const [menu, setMenu] = useState(menuItems);

  const categoryFillter = (cat) => {
    if (cat === "الكل") {
      setMenu(menuItems);
    } else {
      const newMenu = menuItems.filter((item) => item.category === cat);
      setMenu(newMenu);
    }
  };

  const fillterBySearch = (word) => {
    if (word !== "") {
      const searchRes = menuItems.filter((item) => item.title.includes(word));
      setMenu(searchRes);
    }
  };

  const allCategory = ["الكل", ...new Set(menuItems.map((i) => i.category))];

  return (
    <div className="mb-4">
      <Navbar fillterBySearch={fillterBySearch} />
      <Header />
      <Categorys categoryFillter={categoryFillter} allCategory={allCategory} />
      <Card menu={menu} />
    </div>
  );
};

export default App;
