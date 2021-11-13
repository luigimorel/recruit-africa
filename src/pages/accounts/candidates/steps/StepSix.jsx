import React from "react";

const StepSix = () => {
  return (
    <div>
      <h3 className=" font-bold text-2xl mb-4">
        Where did you get your education?
      </h3>
      <div className="flex flex-row">
        <div className="flex flex-col ">
          <div className="flex flex-col">
            <span className=" text-gray-800 mb-2.5">
              School/University/Bootcamp
            </span>
            <input
              type="text"
              name="school"
              id="school "
              className="rounded border-gray-400 w-72 mb-6"
              placeholder="Kyambogo University"
            />
          </div>
          <div className="flex flex-col">
            <span className=" text-gray-800 mb-2.5">Degree/Specialization</span>
            <input
              type="text"
              name="degree"
              className="rounded border-gray-400 w-72 mb-6"
              id="degree "
              placeholder="Enter company name"
            />
          </div>

          <div className="flex flex-col">
            <span className=" text-gray-800 mb-2.5">Graduation Year </span>
            <select name="year" id="year">
              <option value="" defaultValue>
                2021
              </option>
              <option value="" defaultValue>
                2020
              </option>
            </select>
          </div>
        </div>
        <div className=" w-4/5 flex ml-8 flex-col  mb-2.5">
          <div className="flex flex-row justify-between mb-2.5">
            <p className="mr-14 text-gray-800 ">Describe what you learnt </p>
            <p className="text-gray-800">Minimum 70 characters</p>
          </div>
          <textarea
            name=""
            id=""
            cols="80"
            rows="4"
            className=" w-full rounded border-gray-400 h-full"
            placeholder="Created [accounting rule], which resulted in [percentage improvement]"
            required
            minLength="70"
          />
        </div>
      </div>
    </div>
  );
};

export default StepSix;
