import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
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
    {
      id: 5,
      text: "Find a Job",
      route: "/candidate-signup",
    },
    {
      id: 6,
      text: "Post a Job",
      route: "/recruitor-signup",
    },
  ];

  return (
    <div className="sm:hidden dropdown sticky ">
      <ul className="dropdown-menu bg-yellow-100">
        {menuList.map((x) => (
          <li key={x.id} className=" w-full">
            <NavLink
              className=" bg-yellow-50 text-gray-800 hover:text-yellow-400 text-base  py-2 px-5  block whitespace-no-wrap"
              to={x.route}
            >
              {x.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavbar;
