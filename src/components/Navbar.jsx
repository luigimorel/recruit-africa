import React from "react";
import Logo from "./../assets/Logo.svg";
import DropdownIcon from "./../assets/Dropdown.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuList = [
    {
      id: 1,
      text: "Find candidates",
      route: "/",
    },
    {
      id: 2,
      text: "Find jobs",
      route: "/",
    },
    {
      id: 3,
      text: "Login",
      route: "/",
    },
  ];
  return (
    <div className="flex flex-row justify-between mt-12 mx-12">
      <img src={Logo} alt="" />

      <div className="flex flex-row  items-center">
        <ul className="flex flex-row ">
          {menuList.map((x) => (
            <Link key={x.id} to={x.route}>
              <li className="mr-8 sm:mr-4 ">{x.text}</li>
            </Link>
          ))}
        </ul>
        <button className="bg-yellow-300 flex flex-row py-4 px-8 items-center">
          <span className="font-medium"> Signup for free</span>
          <img src={DropdownIcon} className="ml-4" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
