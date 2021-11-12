import React, { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import { ReactComponent as Logo } from "./../../../assets/Logo.svg";
import { ReactComponent as ArrowLeft } from "./../../../assets/accounts/ArrowLeft.svg";

//Components
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepFive from "./steps/StepFive";

const CandidateProfile = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((x) => (x <= 4 ? x + 1 : x));
  const prevStep = () => setStep((x) => (x > 1 ? x - 1 : x));

  return (
    <div className="flex sm:flex-row ">
      <div className=" bg-gray-800 fixed">
        <div className="  bg-candidates-gb h-screen w-80  ">
          <div className="ml-10  mt-10">
            <Link to="/">
              <Logo className="mb-80" />
            </Link>
            <div className="text-white ">
              <h3 className="font-bold text-2xl mb-2 ">Build your resume</h3>
              <p className="mr-4 font-medium text-lg ">
                Join thousands of accountants who’ve found their dream job using
                Recruit4Africa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" ml-28 mr-36  w-full h-full min-h-full   pl-80 ">
        <div className=" mt-16">
          <div className=" h-3  bg-gray-300 mb-11 flex items-center">
            {/* Progress bar at the top of the heading */}
            {step && (
              <div className={`bg-yellow-400 w-${step * 2}/12 h-3`}></div>
            )}
          </div>

          <form action="" method="post" className=" overflow-y-scroll h-1/2">
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree />}
            {step === 4 && <StepFour />}
            {step === 5 && <StepFive />}
          </form>

          <div className="flex flex-row mt-9 pb-10 absolute">
            <button
              onClick={nextStep}
              className=" bg-yellow-500 uppercase mt-4 py-4 px-24 font-bold text-sm"
            >
              NEXT
            </button>

            <button
              onClick={prevStep}
              className="  border ml-8 border-yellow-300 flex flex-row items-center justify-between uppercase mt-4 py-4 px-16 font-bold text-sm"
            >
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
