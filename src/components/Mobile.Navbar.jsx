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
    <div className="dropdown flex flex-row delay-75 transition rounded absolute pr-10  mt-16 min-w-full">
      <ul className="dropdown-menu absolute bg-black pt-2">
        {menuList.map((x) => (
          <li key={x.id} className=" w-80">
            <NavLink
              className=" bg-black text-white hover:text-yellow-400 text-base  py-2 px-5  block whitespace-no-wrap"
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
