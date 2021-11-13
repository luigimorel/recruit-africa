import React from "react";

const StepFive = () => {
  return (
    <div className=" h-1/2 min-h-full">
      <h3 className=" font-bold text-2xl mb-4">Your skills </h3>

      <div className="flex flex-col">
        <span className=" text-gray-800 mb-2.5">Your skills</span>
        <input
          type="text"
          name="title"
          className="rounded w-3/4 border border-gray-400"
          id="title "
          placeholder="Book keeping"
        />
      </div>
    </div>
  );
};

export default StepFive;
