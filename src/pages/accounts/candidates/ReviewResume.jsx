import React, { Fragment } from "react";

//Assets
import { ReactComponent as NilovImg } from "./../../../assets/accounts/Nilov.svg";
import { ReactComponent as BriefCase } from "./../../../assets/accounts/Briefcase.svg";
import { ReactComponent as Chevron } from "./../../../assets/accounts/Chevron.svg";

// Components
import Sidebar from "./components/Sidebar";

const ReviewResume = () => {
  const skills = [
    {
      id: 1,
      text: "Bookkeep",
    },
    {
      id: 2,
      text: "Excel",
    },
    {
      id: 3,
      text: "taxation",
    },
    {
      id: 4,
      text: "Bookkeep",
    },
    {
      id: 5,
      text: "Bookkeep",
    },
  ];

  const jobs = [
    {
      id: 1,
      role: "Accountant",
      company: "AZ industries LTD",
      date: "Jan 2020 - Date",
    },
    {
      id: 2,
      role: "Accountant",
      company: "AZ industries LTD",
      date: "Jan 2020 - Date",
    },
    {
      id: 3,
      role: "Accountant",
      company: "AZ industries LTD",
      date: "Jan 2020 - Date",
    },
  ];

  const schools = [
    {
      id: 1,
      university: "University of Life",
      course: "BSc Accounting",
      gradDate: "Dec. 2009 ",
    },
    {
      id: 2,
      university: "University of Life",
      course: "BSc Accounting",
      gradDate: "Dec. 2009 ",
    },
    {
      id: 3,
      university: "University of Life",
      course: "BSc Accounting",
      gradDate: "Dec. 2009 ",
    },
  ];

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className=" flex  flex-col  bg-yellow-100 h-screen  w-72 ml-72 fixed ">
        <span className="mt-12">
          <NilovImg className="my-0 mx-auto" />
        </span>
        <div className=" pl-12 pr-6 mb-5 ">
          <h6 className="font-bold text-gray-800 mt-8 mb-2 text-lg">
            John Ebuka Musa
          </h6>
          <p className="text-gray-800 text-sm mb-3">example@gmail.com</p>
          <p className="text-gray-800 text-sm mb-8">0700 000 000</p>

          <h6 className="font-bold text-gray-700 text-sm mb-4">My skills</h6>

          <span className="grid grid-cols-2">
            {skills.map((x) => (
              <span
                key={x.id}
                className="p-2.5 text-yellow-700   bg-yellow-200 w-auto mr-2.5 mb-2.5"
              >
                {x.text}
              </span>
            ))}
          </span>
        </div>

        <div className="mx-9">
          <button className="py-4 hover:bg-yellow-500 hover:text-white w-full border border-yellow-300 mb-6 font-bold">
            PUBLISH NOW
          </button>
          <button className="py-4 hover:bg-yellow-500 hover:text-white border border-yellow-300 w-full font-bold">
            EDIT RESUME
          </button>
        </div>
      </div>

      <div className="ml-72 pl-72  mr-32">
        <div className=" w-full ml-12 ">
          <div className="mt-14">
            <h3 className="font-bold text-2xl mb-14">Review your resume</h3>

            <h5 className="font-bold text-lg mb-2.5">Biography</h5>

            <div className=" bg-yellow-50 mb-8 ">
              <div className="flex flex-col ml-5 ">
                <h6 className="pt-8 mb-3 font-bold text-sm">Brief biography</h6>

                <p className="text-xs text-gray-700 mb-9 mr-14">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>

            <Fragment>
              <h3 className="font-bold text-lg mb-2.5">
                What's your current role?
              </h3>

              <div className="grid grid-cols-2">
                {jobs.map((x) => (
                  <div
                    key={x.id}
                    className="flex flex-row bg-yellow-50 items-center mr-8 control mb-8 justify-between p-8"
                  >
                    <BriefCase />

                    <div className="mx-5">
                      <h6 className="font-bold text-sm text-gray-800 mb-1">
                        {x.role}
                      </h6>
                      <p className="text-gray-600 text-sm mb-1"> {x.company}</p>
                      <p className="text-xs to-gray-600">{x.date}</p>
                    </div>

                    <Chevron />
                  </div>
                ))}
              </div>
            </Fragment>

            {/* Start of the schools section */}
            <Fragment>
              <h3 className="font-bold text-lg mb-2.5">
                Educational qualification{" "}
              </h3>

              <div className="grid grid-cols-2">
                {schools.map((x) => (
                  <div
                    key={x.id}
                    className="flex flex-row bg-yellow-50 items-center mr-8  control mb-8 justify-between p-8"
                  >
                    <BriefCase />

                    <div className="mx-5">
                      <h6 className="font-bold text-sm text-gray-800 mb-1">
                        {x.university}
                      </h6>
                      <p className="text-gray-600 text-sm mb-1"> {x.course}</p>
                      <p className="text-xs to-gray-600">{x.gradDate}</p>
                    </div>

                    <Chevron />
                  </div>
                ))}
              </div>
            </Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
