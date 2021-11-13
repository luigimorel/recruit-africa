import React from "react";

// Assets
import { ReactComponent as BookIcon } from "./../../../../assets/accounts/Education.svg";
import { ReactComponent as Chevron } from "./../../../../assets/accounts/Chevron.svg";
import { ReactComponent as AddIcon } from "./../../../../assets/accounts/AddIcon.svg";

const StepSeven = () => {
  const schools = [
    {
      id: 1,
      university: "University of Ife",
      course: "BSc Accounting",
      gradDate: "Dec. 2009 ",
    },
    {
      id: 2,
      university: "University of Ife",
      course: "BSc Accounting",
      gradDate: "Dec. 2009 ",
    },
    {
      id: 3,
      university: "University of Ife",
      course: "BSc Accounting",
      gradDate: "Dec. 2009 ",
    },
    {
      id: 4,
      university: "University of Ife",
      course: "BSc Accounting",
      gradDate: "Dec. 2009 ",
    },
  ];
  return (
    <div className=" min-h-full  h-1/2">
      <h3 className=" font-bold text-2xl mb-4">
        Your educational qualification
      </h3>
      <div className="grid grid-cols-2">
        {schools.map((x) => (
          <div
            key={x.id}
            className="flex flex-row bg-yellow-100 items-center mr-8 mb-8 justify-between p-10"
          >
            <BookIcon />

            <div>
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

      <span className="flex flex-row items-center">
        <AddIcon className="mx-2.5" />
        <span>Add more education</span>
      </span>
    </div>
  );
};

export default StepSeven;
