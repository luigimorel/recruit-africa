import React from "react";

// Assets
import { ReactComponent as Nilov } from "./../../../../../assets/accounts/Nilov.svg";
import { ReactComponent as Logo } from "./../../../../../assets/Logo.svg";

const DashboardSidebar = () => {
  const preferences = [
    {
      id: 1,
      text: "Full time",
      choice: "Yes",
    },
    {
      id: 2,
      text: "Part-time",
      choice: "No",
    },
    {
      id: 3,
      text: "Remote full time",
      choice: "Yes",
    },
    {
      id: 4,
      text: "Remote part time",
      choice: "No",
    },
  ];

  return (
    <div className="w-auto">
      <div className="ml-12">
        <Logo className=" mb-20" />
        <Nilov className="mb-7" />

        <div className="mb-12">
          <h3 className="text-gray-800 font-bold text-lg mb-2.5">
            John Ebuka Musa
          </h3>
          <span className="text-gray-800 text-sm">Payable accountant</span>
        </div>
        <div className="flex flex-col mb-12">
          <div className="flex flex-row justify-between">
            <h6 className="mb-2.5 text-gray-800 font-bold">Job preference</h6>
            <span className=" text-yellow-500 cursor-pointer hover:text-yellow-400">
              Edit
            </span>
          </div>

          {/* Job choices */}
          {preferences.map((x) => (
            <div key={x.id} className="flex flex-row justify-between">
              <h6 className="mb-2.5 text-gray-800">{x.text}</h6>
              <span className="text-gray-800 ">{x.choice}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col mb-12">
          <div className="flex flex-row justify-between">
            <h6 className="mb-2.5 text-gray-800 font-bold">
              Salary Preference
            </h6>
            <span className=" text-yellow-500 cursor-pointer hover:text-yellow-400">
              Edit
            </span>
          </div>

          <div className="flex flex-row justify-between">
            <h6 className="mb-2.5 text-gray-800">UGX 2,000,000 - 3,000,000</h6>
          </div>
        </div>
        <div className="flex flex-col mb-12">
          <div className="flex flex-row justify-between">
            <h6 className="mb-2.5 text-gray-800 font-bold">Location</h6>
            <span className=" text-yellow-500 cursor-pointer hover:text-yellow-400">
              Edit
            </span>
          </div>

          <div className="flex flex-row justify-between">
            <h6 className="mb-2.5 text-gray-800">Entire Uganda</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
