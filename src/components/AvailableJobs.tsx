import React from "react";

//Assets
import { ReactComponent as LocationIcon } from "../assets/Location.svg";
import { ReactComponent as SearchIcon } from "../assets/Search.svg";

const AvailableJobs = () => {
  return (
    <div className="mt-1 bg-yellow-100 flex flex-col items-center mb-14 justify-center">
      <h3 className="font-bold text-4xl mb-2.5 sm:pt-32 pt-16 px-3 text-center">
        10,245 accounting jobs listed here
      </h3>
      <p className="mb-10">Your dream job is waiting for you</p>

      <form action="">
        <div className="flex flex-col sm:flex-row  items-center sm:justify-center sm:bg-white p-2 mb-20 sm:mb-40">
          <div className="flex sm:flex-row flex-col items-center justify-center ">
            {/* Job title */}
            <label className="relative text-gray-400 sm:mr-3 mb-4 focus-within:text-gray-600 block">
              <SearchIcon className="absolute w-6 h-6 top-2.5  left-4" />
            </label>

            <input
              type="text"
              name="title"
              required
              id="title"
              placeholder="Job title"
              autoComplete="true"
              className="form-input border-none  rounded py-3 px-4 w-full bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-14 focus:outline-none"
            />

            {/* Location */}
            <label className="relative text-gray-400 mb-4 focus-within:text-gray-600 block  sm:mr-3">
              <LocationIcon className="absolute w-6 h-6 top-3  left-4" />
              <input
                type="text"
                name="location"
                required
                id="location"
                placeholder="Location"
                autoComplete="true"
                className="form-input border-none  rounded py-3 px-4 w-full bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-14 focus:outline-none"
              />
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="bg-yellow-500 sm:px-8 px-5 sm:py-5 py-3 "
            >
              Find a job
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AvailableJobs;
