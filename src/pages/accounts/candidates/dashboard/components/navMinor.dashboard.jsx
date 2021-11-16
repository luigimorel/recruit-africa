import React from "react";
import { NavLink } from "react-router-dom";

// Assets
import { ReactComponent as Bell } from "./../../../../../assets/accounts/Bell.svg";

const DashboardNavMinor = () => {
  const navMinor = [
    {
      id: 1,
      text: "Jobs",
      route: "/",
    },
    {
      id: 2,
      text: "Applications",
      route: "/",
    },
    {
      id: 3,
      text: "My resume",
      route: "/",
    },
    {
      id: 4,
      text: "My account",
      route: "/",
    },
  ];

  return (
    <div>
      <div className="flex flex-row mb-16">
        <ul className="flex flex-row">
          {navMinor.map((x) => (
            <li className="mr-10 minor-nav text-gray-600" key={x.id}>
              <NavLink to={x.route}>{x.text}</NavLink>
            </li>
          ))}
        </ul>
        <Bell className="ml-8" />
      </div>
    </div>
  );
};

export default DashboardNavMinor;
