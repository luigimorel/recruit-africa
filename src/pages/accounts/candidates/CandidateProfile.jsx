import React, { useState } from "react";

// Assets
import { ReactComponent as ArrowLeft } from "./../../../assets/accounts/ArrowLeft.svg";

//Components
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepFive from "./steps/StepFive";
import StepSix from "./steps/StepSix";
import StepSeven from "./steps/StepSeven";
import StepEight from "./steps/StepEight";
import Sidebar from "./components/Sidebar";

const CandidateProfile = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((x) => (x <= 6 ? x + 1 : x));
  const prevStep = () => setStep((x) => (x > 1 ? x - 1 : x));

  return (
    <div className="flex sm:flex-row ">
      <Sidebar />
      <div className=" ml-28 mr-36  w-full  h-full  pl-80 ">
        <div className=" mt-16">
          <div className=" h-3  bg-gray-300 mb-11 flex items-center">
            {/* Progress bar at the top of the heading */}
            {step && <div className={`bg-yellow-400 w-${step}/6  h-3`}></div>}
          </div>

          <form action="" method="post" className="  ">
            {step === 0 && <StepOne />}
            {step === 1 && <StepTwo />}
            {step === 2 && <StepThree />}
            {step === 3 && <StepFour />}
            {step === 4 && <StepFive />}
            {step === 5 && <StepSix />}
            {step === 6 && <StepSeven />}
            {step === 7 && <StepEight />}
          </form>
        </div>
        <div className="flex flex-row mt-9 pb-10 ">
          <button
            onClick={nextStep}
            className=" bg-yellow-500 uppercase mt-4 py-4 px-24 font-bold text-sm"
          >
            Next
          </button>

          <button
            onClick={prevStep}
            className="  border ml-8 border-yellow-300 flex flex-row items-center justify-between uppercase mt-4 py-4 px-16 font-bold text-sm"
          >
            <ArrowLeft className="mr-6" />

            <span className="uppercase">Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
