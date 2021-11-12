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
      route: "/candidates",
    },
    {
      id: 2,
      text: "Find jobs",
      route: "/employers",
    },
    {
      id: 3,
      text: "Login",
      route: "/login",
    },
  ];

  return (
    <div className="flex flex-row justify-between items-center py-8  ">
      <Link to="/">
        <img src={Logo} loading="lazy" alt="" />
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

        <Link to="/candidate-signup">
          <button className="bg-yellow-300 flex flex-row py-4 px-8 items-center">
            <span className="font-medium"> Signup for free</span>
            <img loading="lazy" src={DropdownIcon} className="ml-4" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
