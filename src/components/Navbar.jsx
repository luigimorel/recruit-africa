import React from "react";
import { Link } from "react-router-dom";

//Assets
import Logo from "./../assets/Logo.svg";
import DropdownIcon from "./../assets/Dropdown.svg";
import { ReactComponent as BurgerMenu } from "./../assets/BurgerMenu.svg";

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
    <div className="flex flex-row justify-between items-center mt-12 mb-10 ">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>

      <p className="sm:hidden">
        <BurgerMenu />
      </p>
      <div className="sm:flex  md:flex-row hidden  items-center">
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
