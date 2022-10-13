import { useState } from "react";

const Navbar = ({ fillterBySearch }) => {
  const [navMenu, setNavMenu] = useState(true);
  const navHandle = () => setNavMenu(!navMenu);

  const [searchValue, setSearchValue] = useState("");
  const search = (word) => {
    fillterBySearch(word);
  };

  return (
    <nav className="bg-gray-800">
      <div
        className={` container px-2 sm:px-8 text-white md:flex justify-between items-center py-3 overflow-hidden md:overflow-visible transition-all duration-200 ${
          navMenu ? "h-[60px]" : "h-[130px]"
        } md:h-fit `}
      >
        <div className="flex md:block justify-between items-center">
          <h1>مطعم جديد</h1>
          <i
            onClick={navHandle}
            className={` text-xl block md:hidden bx ${
              navMenu ? "bx-menu" : "bx-x"
            } `}
          ></i>
        </div>

        <div className="flex justify-center items-center mt-6 md:mt-0">
          <input
            className="px-2 rounded py-1 outline-none text-black w-full md:w-fit"
            type="text"
            placeholder="ابحث"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            onClick={() => search(searchValue)}
            className="mr-3 bg-gray-700 py-1 px-2 rounded"
          >
            بحث
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
