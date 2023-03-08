import React from "react";
import { MdFastfood } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  let Links = [
    { name: "My dashboard", link: "/" },
    { name: "Recipes", link: "/" },
    { name: "Shopping list", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 whitespace-nowrap">
          <div>
            <span className="text-3xl text-orange-600 mr-1 pt-2">
              <MdFastfood className="-mb-4 mt-4 mr-2" />
            </span>
          </div>
          <h1>Meal-planner</h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={Link.link}
                className="text-gray-800 hover:text-gray-400 duration-300"
              >
                {Link.name}
              </a>
            </li>
          ))}
          <Button>Create a plan</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
