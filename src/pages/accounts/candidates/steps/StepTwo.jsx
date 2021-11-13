import React from "react";

const StepTwo = () => {
  return (
    <div className=" min-h-full">
      <h3 className=" font-bold text-2xl mb-12">Brief Bio </h3>
      <div className="flex flex-row justify-start mb-2.5">
        <p className="mr-14 text-gray-800">Describe what you learnt</p>
        <p className="text-gray-800">Minimum 70 characters</p>
      </div>

      <textarea
        name=""
        id=""
        cols="50"
        placeholder="I’m motivated and a team player"
        className="pt-2 px-3 rounded border border-gray-400"
        rows="10"
        minLength="70"
      ></textarea>
    </div>
  );
};

export default StepTwo;
