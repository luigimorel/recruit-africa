import React from "react";

const StepOne = () => {
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
    <>
      <h3 className=" font-bold text-2xl mb-4">What's your current role? </h3>

      <div className=" grid grid-cols-3">
        {jobs.map((x) => (
          <div
            key={x.id}
            className=" hover:bg-gray-200 mt-8 border w-60 bg-white border-gray-300 py-2.5 flex justify-between items-center"
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
    </>
  );
};

export default StepOne;
