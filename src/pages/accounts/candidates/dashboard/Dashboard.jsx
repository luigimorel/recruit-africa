import React from "react";
import { NavLink } from "react-router-dom";

//Assets
import { ReactComponent as Logo } from "./../../../../assets/Logo.svg";
import { ReactComponent as Bell } from "./../../../../assets/accounts/Bell.svg";
import { ReactComponent as Nilov } from "./../../../../assets/accounts/Nilov.svg";
import { ReactComponent as Location } from "./../../../../assets/Location.svg";
import JobLogo from "../../../../assets/JobLogo.png";
import { ReactComponent as Verified } from "./../../../../assets/accounts/Verified.svg";
import { ReactComponent as Bookmark } from "./../../../../assets/accounts/Bookmark.svg";
import { ReactComponent as Star } from "./../../../../assets/Star.svg";

const CandidatesDashboard = () => {
  const navMinor = [
    {
      id: 1,
      text: "Jobs",
      route: "/",
    },
    {
      id: 2,
      text: "Applications",
      route: "/",
    },
    {
      id: 3,
      text: "My resume",
      route: "/",
    },
    {
      id: 4,
      text: "My account",
      route: "/",
    },
  ];

  const preferences = [
    {
      id: 1,
      text: "Full time",
      choice: "Yes",
    },
    {
      id: 2,
      text: "Part-time",
      choice: "No",
    },
    {
      id: 3,
      text: "Remote full time",
      choice: "Yes",
    },
    {
      id: 4,
      text: "Remote part time",
      choice: "No",
    },
  ];

  const jobs = [
    {
      id: 1,
      img: JobLogo,
      title: "Forensic accountant",
      location: "Kampala, Uganda",
      experience: "3 to 5 years",
      type: "Full time",
      salary: "2,000 & Above",
    },
    {
      id: 2,
      img: JobLogo,
      title: "Forensic accountant",
      location: "Kampala, Uganda",
      experience: "3 to 5 years",
      type: "Full time",
      salary: "2,000 & Above",
    },
  ];

  return (
    <div className="flex flex-row pt-12 ">
      <div className="ml-12">
        <Logo className=" mb-20" />
        <Nilov className="mb-7" />

        <div className="mb-12">
          <h3 className="text-gray-800 font-bold text-lg mb-2.5">
            John Ebuka Musa
          </h3>
          <span className="text-gray-800 text-sm">Payable accountant</span>
        </div>
        <div className="flex flex-col mb-12">
          <div className="flex flex-row justify-between">
            <h6 className="mb-2.5 text-gray-800 font-bold">Job preference</h6>
            <span className=" text-yellow-500 cursor-pointer hover:text-yellow-400">
              Edit
            </span>
          </div>

          {/* Job choices */}
          {preferences.map((x) => (
            <div key={x.id} className="flex flex-row justify-between">
              <h6 className="mb-2.5 text-gray-800">{x.text}</h6>
              <span className="text-gray-800 ">{x.choice}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col mb-12">
          <div className="flex flex-row justify-between">
            <h6 className="mb-2.5 text-gray-800 font-bold">
              Salary Preference
            </h6>
            <span className=" text-yellow-500 cursor-pointer hover:text-yellow-400">
              Edit
            </span>
          </div>

          <div className="flex flex-row justify-between">
            <h6 className="mb-2.5 text-gray-800">UGX 2,000,000 - 3,000,000</h6>
          </div>
        </div>
        <div className="flex flex-col mb-12">
          <div className="flex flex-row justify-between">
            <h6 className="mb-2.5 text-gray-800 font-bold">Location</h6>
            <span className=" text-yellow-500 cursor-pointer hover:text-yellow-400">
              Edit
            </span>
          </div>

          <div className="flex flex-row justify-between">
            <h6 className="mb-2.5 text-gray-800">Entire Uganda</h6>
          </div>
        </div>
      </div>

      {/* Start of the navbar */}
      <div className="ml-28 mt-1 mr-28 w-3/5 ">
        <div className="flex flex-row mb-16">
          <ul className="flex flex-row">
            {navMinor.map((x) => (
              <li className="mr-10 minor-nav text-gray-600" key={x.id}>
                <NavLink to={x.route}>{x.text}</NavLink>
              </li>
            ))}
          </ul>
          <Bell className="ml-8" />
        </div>

        <form action="" method="post" className="mb-16 ">
          <h6 className="font-bold mb-4">Search for jobs</h6>
          <label htmlFor="search">
            <div className="flex flex-row">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search by skills, job title and location"
                className="w-full rounded border border-gray-400 border-r-0 placeholder-gray-400"
              />
              <button
                className=" bg-yellow-500 text-black px-4 py-2.5 "
                type="submit"
              >
                Search
              </button>
            </div>
          </label>
        </form>

        {/* End of the form */}

        <div className="flex flex-col">
          {jobs.map((x) => (
            <div className="mb-10 shadow-lg  pt-8 flex flex-col ">
              <div className="flex flex-col mx-10">
                <div className="flex flex-row items-center mb-7">
                  <img src={x.img} width="60" alt="" />
                  <div className="flex flex-col ml-5">
                    <h6 className="font-bold text-xl text-gray-800">
                      {x.title}
                    </h6>

                    <span className="flex flex-row items-center ">
                      <Location className="mr-2" />
                      <span className="text-sm text-gray-400">
                        {x.location}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 mb-7">
                  <span>
                    <h3 className="text-gray-500 text-xs">Experience</h3>
                    <p className="font-bold text-gray-700">{x.experience}</p>
                  </span>
                  <span>
                    <h3 className="text-gray-500 text-xs">Job type</h3>
                    <p className="font-bold text-gray-700">{x.type}</p>
                  </span>
                  <span>
                    <h3 className="text-gray-500 text-xs">Salary</h3>
                    <p className="font-bold text-gray-700">$ {x.salary}</p>
                  </span>
                </div>
              </div>
              <div className=" bg-yellow-50">
                <div className=" grid grid-cols-3 items-center px-10 py-4">
                  <span className="flex flex-row items-center">
                    <Verified className="mr-2.5" />
                    <p className=" text-xs font-bold  text-green-500">
                      Verified company
                    </p>
                  </span>
                  <p className="text-xs text-gray-500">Posted 3 mins ago</p>
                  <button className="flex flex-row items-center">
                    <Bookmark className="mr-2.5" />
                    <p className=" text-xs text-gray-500">Save Job</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" mt-16 pt-0.5 mr-24">
        <div className=" flex flex-row justify-between items-center">
          <h3 className="text-gray-800 font-bold text-lg mt-6 mb-8">Filters</h3>
          <h6 className="mt-6 mb-8 text-gray-700 text-sm">Clear All </h6>
        </div>
        <div className="flex flex-col mb-8">
          <div className="flex flex-row justify-between">
            <h6 className="mb-2.5 text-gray-800 font-bold">Job preference</h6>
            <span className=" text-yellow-500 cursor-pointer hover:text-yellow-400">
              Edit
            </span>
          </div>

          {/* Job choices */}
          {preferences.map((x) => (
            <div key={x.id} className="flex flex-row justify-between">
              <h6 className="mb-2.5 text-gray-800 mr-8">{x.text}</h6>
              <span className="text-gray-800 ">{x.choice}</span>
            </div>
          ))}
        </div>
        <div className="">
          <h3 className="font-bold text-gray-800 mb-3">
            Post a review for Recruit4Africa
          </h3>

          <div className="flex flex-row mb-3">
            <Star className="mr-7" />
            <Star className="mr-7" />
            <Star className="mr-7" />
            <Star className="mr-7" />
            <Star className="mr-7" />
          </div>

          <form action="post">
            <textarea
              name=""
              id=""
              cols="30"
              placeholder="Post a review"
              className="rounded border border-gray-400 mb-4 "
              rows="7"
            ></textarea>

            <button className=" text-sm font-bold py-2.5 px-8 bg-yellow-500">
              PUBLISH NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidatesDashboard;
