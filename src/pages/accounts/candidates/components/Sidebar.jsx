import React from "react";
import { Link } from "react-router-dom";

// Assets
import { ReactComponent as Logo } from "./../../../../assets/Logo.svg";

const Sidebar = () => {
  return (
    <>
      <div className=" bg-gray-800 fixed">
        <div className="  bg-candidates-gb h-screen w-80  ">
          <div className="ml-10  mt-10">
            <Link to="/">
              <Logo className="mb-72" />
            </Link>
            <div className="text-white ">
              <h3 className="font-bold text-2xl mb-2 ">Build your resume</h3>
              <p className="mr-4 font-medium text-lg ">
                Join thousands of accountants who’ve found their dream job using
                Recruit4Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
