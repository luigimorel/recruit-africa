import React from "react";

// Assets
import { ReactComponent as Logo } from "./../../../assets/Logo.svg";

const CandidateProfile = () => {
  const jobs = [
    {
      id: 1,
      title: "Forensic Accountant",
    },
    {
      id: 2,
      title: "Tax Attorney",
    },
    {
      id: 3,
      title: "Tax Preparer",
    },
    {
      id: 4,
      title: "Tax Accountant",
    },
    {
      id: 5,
      title: "Accounting Clerk",
    },
    {
      id: 6,
      title: "Accounting Careers",
    },
    {
      id: 7,
      title: "Compliance Officer",
    },
    {
      id: 8,
      title: "Tax Consultant",
    },
    {
      id: 9,
      title: "Internal Auditor",
    },
    {
      id: 10,
      title: "Budget Analyst",
    },
  ];
  return (
    <div className="flex sm:flex-row ">
      <div className=" bg-gray-800">
        <div className="  bg-candidates-gb h-screen w-80 ">
          <Logo className="ml-10 mt-10" />

          <div className="text-white">
            <h3 className="font-bold text-2xl mt-80">Build your resume</h3>
            <p></p>
          </div>
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
              {jobs.map((x) => (
                <div
                  key={x.id}
                  className=" hover:bg-gray-200 mb-8 border w-60 bg-white border-gray-300 py-2.5 flex justify-between items-center"
                >
                  <span className="px-4">{x.title}</span>
                  <input
                    type="checkbox"
                    name="role"
                    className="mr-5 rounded peer-checked:bg-black"
                    id="role"
                  />
                </div>
              ))}
            </div>

            <button className=" bg-yellow-500 uppercase mt-4 py-4 px-24 font-bold text-sm">
              NEXT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
