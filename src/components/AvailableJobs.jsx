import React from "react";

//Assets
import { ReactComponent as SearchIcon } from "./../assets/Search.svg";
import { ReactComponent as LocationIcon } from "./../assets/Location.svg";

const AvailableJobs = () => {
  return (
    <div className="mt-11 bg-yellow-100 flex flex-col items-center mb-14 justify-center">
      <h3 className="font-bold text-4xl sm:mb-2.5 sm:pt-32 pt-16 text-center">
        10,245 accounting jobs listed here
      </h3>
      <p className="mb-10">Your dream job is waiting for you</p>

      <form action="">
        <div className="flex flex-col sm:flex-row  items-center bg-white w-auto p-2 mb-40">
          <div className="flex flex-row items-center mb-4">
            <span className="mr-2">
              <SearchIcon />
            </span>
            <input
              type="text"
              id="job-title"
              name="job-title"
              placeholder="Job title"
              className="sm:mr-16  border-0"
            />
          </div>
          <div className="flex flex-row  items-center mb-4">
            <span className="mr-2 ">
              <LocationIcon />
            </span>

            <input
              type="text"
              name="location"
              id="location  "
              placeholder="Location"
              className="sm:mr-16 border-0 "
            />
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
