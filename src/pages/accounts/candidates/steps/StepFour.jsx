import React from "react";

// Assets
import { ReactComponent as BriefCase } from "./../../../../assets/accounts/Briefcase.svg";
import { ReactComponent as Chevron } from "./../../../../assets/accounts/Chevron.svg";
import { ReactComponent as AddIcon } from "./../../../../assets/accounts/AddIcon.svg";

const StepFour = () => {
  const jobs = [
    {
      id: 1,
      role: "Payable accountant",
      company: "AZ industries LTD",
      date: "Jan 2020 - Date",
    },
    {
      id: 2,
      role: "Payable accountant",
      company: "AZ industries LTD",
      date: "Jan 2020 - Date",
    },
    {
      id: 3,
      role: "Payable accountant",
      company: "AZ industries LTD",
      date: "Jan 2020 - Date",
    },
    {
      id: 4,
      role: "Payable accountant",
      company: "AZ industries LTD",
      date: "Jan 2020 - Date",
    },
  ];
  return (
    <div className=" min-h-full  h-1/2">
      <h3 className=" font-bold text-2xl mb-4">What's your current role? </h3>
      <div className="grid grid-cols-2">
        {jobs.map((x) => (
          <div
            key={x.id}
            className="flex flex-row bg-yellow-100 items-center mr-8 mb-8 justify-between p-10"
          >
            <BriefCase />

            <div>
              <h6 className="font-bold text-sm text-gray-800 mb-1">{x.role}</h6>
              <p className="text-gray-600 text-sm mb-1"> {x.company}</p>
              <p className="text-xs to-gray-600">{x.date}</p>
            </div>

            <Chevron />
          </div>
        ))}
      </div>

      <span className="flex flex-row items-center">
        <AddIcon className="mx-2.5" />
        <span>Add more work experience</span>
      </span>
    </div>
  );
};

export default StepFour;
