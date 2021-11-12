import React from "react";

const StepThree = () => {
  return (
    <>
      <h3 className=" font-bold text-2xl mb-12 ml-2">
        What's your most recent job?
      </h3>
      <div className="flex flex-row ">
        <div className="flex flex-col mr-9">
          <span className=" text-gray-800 mb-2.5">Title</span>
          <input
            type="text"
            name="title"
            id="title "
            className="rounded w-72"
            placeholder="Payable accountant"
          />
        </div>
        <div className="flex flex-col">
          <span className=" text-gray-800 mb-2.5">Company</span>
          <input
            type="text"
            name="title"
            className="rounded w-72"
            id="title "
            placeholder="Enter company name"
          />
        </div>
      </div>
      <div className="flex items-center flex-row my-5">
        <input type="checkbox" name="" id="" className="rounded" />
        <span className="text-gray-800 ml-8">I currently work here</span>
      </div>

      {/* Start of the selct section */}
      <div className="flex flex-row mb-6 ">
        <div className="flex flex-col mr-9">
          <span className=" text-gray-800 mb-2.5 ml-2">Start</span>
          <select
            name=""
            id=""
            placeholder="Select date"
            className="w-72 rounded"
          >
            <option value="">Select date</option>
          </select>
        </div>
        <div className="flex flex-col">
          <span className=" text-gray-800 mb-2.5">Start</span>
          <select
            name=""
            id=""
            placeholder="Select date"
            className=" w-72 rounded"
          >
            <option value="">Select date</option>
          </select>
        </div>
      </div>

      {/* Skills section */}
      <div className="mb-2.5">
        <h2 className=" ml-2 mb-2.5 text-gray-800">
          What skills and technology did you use?
        </h2>
        <input
          type="text"
          name=""
          id=" "
          className=" sm:w-4/5 rounded"
          multiple
          placeholder="Type skills"
        />
      </div>

      {/* Start of the accomplishments  */}
      <div className=" w-4/5 flex flex-row justify-start mb-2.5">
        <p className="mr-14 text-gray-800 ">
          Describe your accomplishmnets in this role
        </p>
        <p className="text-gray-800">Minimum 70 characters</p>
      </div>

      <textarea
        name=""
        id=""
        cols="80"
        rows="4"
        className=" w-full"
        placeholder="Created [accounting rule], which resulted in [percentage improvement]"
        required
        minLength="70"
      ></textarea>
    </>
  );
};

export default StepThree;
