import React from "react";

// Assets
import { ReactComponent as Logo } from "./../../../assets/Logo.svg";

const CandidateProfile = () => {
  return (
    <div className="flex sm:flex-row ">
      <div className=" bg-gray-800">
        <div className="  bg-candidates-gb h-screen w-80 ">
          <Logo className="ml-10 mt-10" />
        </div>
      </div>

      <div className=" ml-28 mr-36 w-full">
        <div className=" mt-16">
          <div className=" h-3  bg-gray-300 mb-11">
            {/* Add progress bar here */}
          </div>

          <form action="" method="post">
            <h3 className=" font-bold text-2xl mb-12">
              What's your current role?{" "}
            </h3>

            <div className=" grid grid-cols-3">
              <div className=" hover:bg-gray-200 mb-8 border w-60 bg-white border-gray-300 py-2.5 flex justify-between items-center">
                <span className="px-4">Forensic Accountant</span>
                <input
                  type="checkbox"
                  name="role"
                  className="mr-5 rounded peer-checked:bg-black"
                  id="role"
                />
              </div>{" "}
              <div className=" hover:bg-gray-200 mb-8 border w-60  bg-white border-gray-300 py-2.5 flex justify-between items-center">
                <span className="px-4">Forensic Accountant</span>
                <input
                  type="checkbox"
                  name="role"
                  className="mr-5 rounded peer-checked:bg-black"
                  id="role"
                />
              </div>{" "}
              <div className=" hover:bg-gray-200 mb-8 border w-60 bg-white border-gray-300 py-2.5 flex justify-between items-center">
                <span className="px-4">Forensic Accountant</span>
                <input
                  type="checkbox"
                  name="role"
                  className="mr-5 rounded peer-checked:bg-black"
                  id="role"
                />
              </div>
              <div className=" hover:bg-gray-200 mb-8 border w-60 border-gray-300 bg-white py-2.5 flex justify-between items-center">
                <span className="px-4">Forensic Accountant</span>
                <input
                  type="checkbox"
                  name="role"
                  className="mr-5 rounded peer-checked:bg-black"
                  id="role"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
