import React, { useState } from "react";

//Components
import DashboardNavMinor from "./navMinor.dashboard";
import DashboardSidebar from "./sidebar.dashboard";
import Checkbox from "./../../../../../common/Checkbox";

//Assets
import { ReactComponent as BriefCaseSmall } from "./../../../../../assets/accounts/BriefcaseSmall.svg";
import { Link } from "react-router-dom";

const JobApplications = () => {
  const jobDetails = [
    {
      id: 2,
      title: "Forensic accountant",
      company: "Facility Man LTD",
      timeLapse: "4",
    },
    {
      id: 1,
      title: "Forensic accountant",
      company: "Facility Man LTD",
      timeLapse: "4",
    },
  ];
  return (
    <div>
      <div className="flex flex-row pt-14 ">
        <DashboardSidebar />

        <div className=" ml-28 ">
          <div className="mb-20">
            <DashboardNavMinor />
          </div>

          <div className="flex flex-row mb-12">
            <Checkbox label="Submited Applications " className=" " number={3} />
            <Checkbox label="Invited for Interviews" className=" " number={0} />
            <Checkbox label="Offered Jobs" className=" " number={1} />
          </div>

          <div className="flex flex-col">
            {jobDetails.map((x) => (
              <div key={x.id} className="shadow-sm bg-white mb-10">
                <div className="ml-20">
                  <div className="mb-7">
                    <h3 className="pt-10 text-gray-800 font-bold text-2xl mb-3">
                      {x.title}
                    </h3>

                    <span className="flex flex-row items-center">
                      <BriefCaseSmall className="mr-3" />
                      <span className="text-sm text-gray-800 ">
                        {x.company}
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-row-reverse items-center ">
                    <Link to={`/candidate-dashboard/${x.id}`}>
                      <button className=" bg-yellow-400 py-2.5 px-8">
                        View details
                      </button>
                    </Link>

                    <span className=" mr-10 text-gray-500">
                      {x.timeLapse} days ago
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplications;
