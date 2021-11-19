import React, { Fragment } from "react";

//Assets
import { ReactComponent as ArrowLeftBlack } from "./../../../../../assets/accounts/ArrowLeftBlack.svg";
import { ReactComponent as Bookmark } from "./../../../../../assets/accounts/Bookmark.svg";
import CompanyLogo from "././../../../../../assets/JobLogo.png";
import { ReactComponent as Verified } from "./../../../../../assets/accounts/Verified.svg";

//Components
import DashboardNavMinor from "./navMinor.dashboard";
import DashboardSidebar from "./sidebar.dashboard";

const DashboardJobDetails = () => {
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

  const jobData = [
    {
      id: 1,
      about:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      res: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  const salaryData = [
    {
      id: 1,
      salaryLimit1: 200,
      salaryLimit2: 1000,
      exp1: 3,
      exp2: 5,
      city: "Kampala",
      country: "Uganda",
    },
  ];
  return (
    <div className="flex flex-row pt-14 mr-24 ">
      <DashboardSidebar />

      <div className="ml-28 w-3/5">
        <DashboardNavMinor />

        <button className="flex flex-row items-center mb-3 bg-yellow-500 font-bold text-gray-900 px-6 py-3">
          <ArrowLeftBlack className=" mr-3" />
          <span>GO BACK</span>
        </button>

        <div className=" shadow-sm flex flex-col bg-white">
          <div className=" p-10">
            <div className="flex flex-row justify-between items-center mb-6">
              <h3 className="text-gray-900 font-bold  text-xl">Job details</h3>
              <p className="text-yellow-500 text-sm">Posted 3 mins ago</p>
            </div>
            {jobData.map((x) => (
              <Fragment key={x.id}>
                <h3 className="font-bold text-xs mb-2.5">About the company</h3>

                <p className="mb-7 to-gray-700 text-xs">{x.about}</p>

                <h3 className="font-bold text-xs mb-2.5">Responsibility</h3>

                <p className="mb-7 to-gray-700 text-xs">{x.res}</p>
              </Fragment>
            ))}

            <div className="flex flex-row mb-3 justify-between">
              <button className="border border-yellow-500 py-2.5 w-full px-18 mr-6 text-sm font-bold hover:bg-yellow-500">
                APPLY FOR THIS JOB
              </button>
              <button className="border border-yellow-500 flex justify-center flex-row items-center px-18 py-2.5 w-full text-sm font-bold hover:bg-yellow-500">
                <Bookmark className="mr-4" /> <span> SAVE THIS JOB</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-4 ml-24 w-auto  ">
        <div className=" flex flex-row mt-2.5 items-center mb-6">
          <img src={CompanyLogo} alt="" />

          <h6 className="text-gray-800 ml-4 font-bold">Forensic accountant</h6>
        </div>
        <div className="bg-white flex flex-row px-4 py-2.5 mb-4">
          <Verified className="mr-2.5" />

          <p className=" text-xs font-bold  text-green-500">Verified company</p>
        </div>

        <h3 className="text-gray-800 text-sm font-bold mb-2.5">
          Job Preference
        </h3>

        {preferences.map((x) => (
          <div key={x.id} className="flex flex-row justify-between">
            <h6 className="mb-2.5 text-gray-800 mr-8">{x.text}</h6>
            <span className="text-gray-800 ">{x.choice}</span>
          </div>
        ))}

        {salaryData.map((x) => (
          <>
            <h3 className="text-gray-800 text-sm font-bold mb-2.5">Salary </h3>
            <p className="mb-2.5">
              $ {x.salaryLimit1} - {x.salaryLimit2}
            </p>

            <h3 className="text-gray-800 text-sm font-bold mb-2.5">
              Experience
            </h3>
            <p className="mb-2.5">
              {x.exp1} to {x.exp2} years
            </p>
            <h3 className="text-gray-800 text-sm font-bold mb-2.5">
              Job Location
            </h3>
            <p className="mb-2.5">
              {x.city}, {x.country}
            </p>
          </>
        ))}
      </div>
    </div>
  );
};

export default DashboardJobDetails;
