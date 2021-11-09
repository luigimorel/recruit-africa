import React from "react";

//Assets
import { ReactComponent as SearchIcon } from "./../assets/Search.svg";
import { ReactComponent as LocationIcon } from "./../assets/Location.svg";

const AvailableJobs = () => {
  return (
    <div className="mt-1 bg-yellow-100 flex flex-col items-center mb-14 justify-center">
      <h3 className="font-bold text-4xl sm:mb-2.5 sm:pt-32 pt-16 text-center">
        10,245 accounting jobs listed here
      </h3>
      <p className="mb-10">Your dream job is waiting for you</p>

      <form action="">
        <div className="flex flex-col sm:flex-row  items-center justify-center bg-white w-auto p-2 mb-40">
          <div className="flex flex-row items-center ">
            {/* Job title */}
            <label class="relative text-gray-400 mr-3 focus-within:text-gray-600 block">
              <SearchIcon className="absolute w-6 h-6 top-2.5  left-4" />

              <input
                type="text"
                name="title"
                required
                id="title"
                placeholder="Job title"
                autoComplete
                class="form-input border-none  rounded py-3 px-4 w-full bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-14 focus:outline-none"
              />
            </label>

            {/* Location */}
            <label class="relative text-gray-400 focus-within:text-gray-600 block mr-3">
              <LocationIcon className="absolute w-6 h-6 top-3  left-4" />
              <input
                type="text"
                name="location"
                required
                id="location"
                placeholder="location"
                autoComplete
                class="form-input border-none  rounded py-3 px-4 w-full bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-14 focus:outline-none"
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
