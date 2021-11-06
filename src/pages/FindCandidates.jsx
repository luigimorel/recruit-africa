import React from "react";

//Assets
import { ReactComponent as CheckCircle } from "./../assets/CheckCircle.svg";

// Components
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import HeroSection from "../components/HeroSection";
import ImageSection from "../components/ImageSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Checkbox from "../common/Checkbox";

const FindCandidates = () => {
  const flexPlan = [
    {
      id: 1,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
    {
      id: 2,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
    {
      id: 3,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
    {
      id: 4,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
    {
      id: 5,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
  ];

  const compactPlan = [
    {
      id: 1,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
    {
      id: 2,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
    {
      id: 3,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
    {
      id: 4,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
    {
      id: 5,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
  ];

  const entreprisePlan = [
    {
      id: 1,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
    {
      id: 2,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
    {
      id: 3,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
    {
      id: 4,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
    {
      id: 5,
      text: "Assessed candidates",
      icon: <CheckCircle />,
    },
  ];

  return (
    <>
      <div className="sm:mx-12 mx-3">
        <Navbar />
        <HeroSection
          heading="For Employers"
          background="bg-employer"
          descText="candidates for the job "
          btnText="Find Candidates"
        />
        <ImageSection descText="Post a job" />

        {/* Start of the subscrition section */}
        <div className="mb-36 ">
          <div className="sm:px-20 px-10 items-center">
            <h4 className="font-bold text-4xl text-center mb-2.5">
              Ready to start with Recruit4Africa?
            </h4>
            <p className="sm:px-64 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
          </div>
          <div className="items-center mb-8 sm:12">
            {/* TO DO: Add a custom checkbox here */}
            <Checkbox />
          </div>
          <div className="flex flex-col sm:flex-row justify-between sm:mx-20 ">
            {/* Flex plan */}
            <div className="px-9 shadow-md hover:bg-yellow-500 mb-4 plan-container ">
              <h3 className="text-4xl  mb-6 pt-12">
                ₦ 75,500 / <span className="text-sm"> Yearly</span>
              </h3>

              <h4 className="text-3xl font-medium mb-5">Flex</h4>
              <div className="flex flex-col mb-8">
                {flexPlan.map((x) => (
                  <span key={x.id} className="flex flex-row">
                    <p className="mr-2.5 mb-4">{x.icon}</p>
                    <p>{x.text}</p>
                  </span>
                ))}
              </div>
              <button className="bg-yellow-400 plan-button py-4 px-12 mb-16 hover:text-white hover:bg-gray-900">
                Get Flex Plan
              </button>
            </div>

            {/* Compact */}
            <div className="px-9 shadow-md hover:bg-yellow-500 plan-container ">
              <h3 className="text-4xl  mb-6 pt-12">
                ₦ 275,500 / <span className="text-sm"> Yearly</span>
              </h3>

              <h4 className="text-3xl font-medium mb-5">Compact</h4>
              <div className="flex flex-col mb-8">
                {compactPlan.map((x) => (
                  <span key={x.id} className="flex flex-row">
                    <p className="mr-2.5 mb-4">{x.icon}</p>
                    <p>{x.text}</p>
                  </span>
                ))}
              </div>
              <button className="bg-yellow-400 plan-button py-4 px-12 mb-16 hover:text-white hover:bg-gray-900">
                Get Compact Plan
              </button>
            </div>

            {/* Entreprise */}
            <div className="px-9 shadow-md hover:bg-yellow-500 plan-container ">
              <h3 className="text-4xl  mb-6 pt-12">
                ₦ 1,075,500 / <span className="text-sm"> Yearly</span>
              </h3>

              <h4 className="text-3xl font-medium mb-5">Enterprise</h4>
              <div className="flex flex-col mb-8">
                {entreprisePlan.map((x) => (
                  <span key={x.id} className="flex flex-row">
                    <p className="mr-2.5 mb-4">{x.icon}</p>
                    <p>{x.text}</p>
                  </span>
                ))}
              </div>
              <button className="bg-yellow-400 plan-button py-4 px-12 mb-16 hover:text-white hover:bg-gray-900">
                Get Enterprise Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <CTA ctaText="Start recruiting" />
      <Testimonials testmonialHeading="You are in good hands, see what other recruiters are saying about Recruit4Africa" />
      <Footer />
    </>
  );
};

export default FindCandidates;
