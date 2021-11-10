import React from "react";

// Assets
import { ReactComponent as Logo } from "./../../../assets/Logo.svg";
import { ReactComponent as ArrowLeft } from "./../../../assets/accounts/ArrowLeft.svg";

//Components
import StepOne from "./steps/StepOne";

const CandidateProfile = () => {
  return (
    <div className="flex sm:flex-row ">
      <div className=" bg-gray-800 fixed">
        <div className="  bg-candidates-gb h-screen w-80  ">
          <div className="ml-10  mt-10">
            <Logo className="mb-80" />

            <div className="text-white ">
              <h3 className="font-bold text-2xl ">Build your resume</h3>
              <p className="mr-4 font-medium text-lg ">
                Join thousands of accountants who’ve found their dream job using
                Recruit4Africa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" ml-28 mr-36  w-full relative pl-80 h-screen">
        <div className=" mt-16">
          <div className=" h-3  bg-gray-300 mb-11">
            {/* Add progress bar here */}
          </div>

          <form action="" method="post">
            <StepOne />
          </form>
          <div className="flex flex-row">
            <button className=" bg-yellow-500 uppercase mt-4 py-4 px-24 font-bold text-sm">
              NEXT
            </button>

            <button className="  border ml-8 border-yellow-300 flex flex-row items-center justify-between uppercase mt-4 py-4 px-20 font-bold text-sm">
              <ArrowLeft className="mr-6" />

              <span className="uppercase">GO BACK</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
