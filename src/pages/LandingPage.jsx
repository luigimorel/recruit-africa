import React from "react";

//Components
import AvailableJobs from "../components/AvailableJobs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ImageSection from "../components/ImageSection";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
  return (
    <>
      <div className="sm:mx-12">
        <Navbar />
      </div>

      <AvailableJobs />

      <div className="sm:mx-20 mb-24 hidden sm:block">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <h3 className="font-bold text-4xl mb-5">Latest Jobs</h3>
            <form action="">
              <div className="flex  flex-row">
                <span className="flex flex-row items-center sm:mr-9">
                  <p className="mr-5">Full time</p>
                  <input
                    type="checkbox"
                    className="bg-white  rounded border-2 border-gray-400"
                  />
                </span>
                <span className="flex flex-row items-center sm:mr-9">
                  <p className="mr-5">Part-time</p>
                  <input
                    type="checkbox"
                    className="bg-white  rounded border-2 border-gray-400"
                  />
                </span>
                <span className="flex flex-row items-center sm:mr-9">
                  <p className="mr-5">Remote</p>
                  <input
                    type="checkbox"
                    className="bg-white  rounded border-2 border-gray-400"
                  />
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* Start of the table */}
        <table class="border-0 w-full">
          <thead className="py-20 bg-yellow-100">
            <tr className="py-20">
              <th className="text-left ">Job type</th>
              <th className="text-left">Company</th>
              <th className="text-left">Salary</th>
              <th className="text-left">Posted</th>
              <th className="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold text-gray-800">Forensic accountant</td>
              <td className="">Facility Man</td>
              <td className="">₦ 200,000</td>
              <td className="">3 hours ago</td>
              <td className="">
                <button className="border-gray-500 border-2 px-5 py-2.5 hover:bg-yellow-500 hover:border-transparent">
                  Apply Now
                </button>
              </td>
            </tr>{" "}
            <tr>
              <td className="">Forensic accountant</td>
              <td className="">Facility Man</td>
              <td className="">₦ 200,000</td>
              <td className="">3 hours ago</td>
              <td className="">
                <button className="border-gray-500 border-2 px-5 py-2.5 hover:bg-yellow-500 hover:border-transparent">
                  Apply Now
                </button>
              </td>
            </tr>{" "}
            <tr>
              <td className="">Forensic accountant</td>
              <td className="">Facility Man</td>
              <td className="">₦ 200,000</td>
              <td className="">3 hours ago</td>
              <td className="">
                <button className="border-gray-500 border-2 px-5 py-2.5 hover:bg-yellow-500 hover:border-transparent">
                  Apply Now
                </button>
              </td>
            </tr>{" "}
            <tr>
              <td className="">Forensic accountant</td>
              <td className="">Facility Man</td>
              <td className="">₦ 200,000</td>
              <td className="">3 hours ago</td>
              <td className="">
                <button className="border-gray-500 border-2 px-5 py-2.5 hover:bg-yellow-500 hover:border-transparent">
                  Apply Now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="sm:mx-12">
        <ImageSection descText="Find Jobs" />
      </div>

      <CTA ctaText="Create my resume" />
      <div className="sm:mx-12">
        <Testimonials testmonialHeading="You are in good hands, we are trusted by more than a thousand companies" />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
