import React from "react";

//Assets
import JobLogo from "./../assets/JobLogo.png";

//Components
import AvailableJobs from "../components/AvailableJobs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ImageSection from "../components/ImageSection";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
  const rowHeadings = [
    {
      id: 1,
      text: "Job Type",
    },
    {
      id: 2,
      text: "Company",
    },
    {
      id: 3,
      text: "Salary",
    },
    {
      id: 4,
      text: "Posted",
    },
    {
      id: 5,
      text: "",
    },
  ];

  const jobs = [
    {
      id: 1,
      logo: JobLogo,
      title: "Forensic accountant",
      type: "Facility Man",
      amount: "2,000,000",
      timePosted: "3 hours ago",
      btnText: "Apply Now",
    },
    {
      id: 2,
      logo: JobLogo,
      title: "Forensic accountant",
      type: "Facility Man",
      amount: "2,000,000",
      timePosted: "3 hours ago",
      btnText: "Apply Now",
    },
  ];

  return (
    <>
      <div className="sm:px-20 px-8 bg-white">
        <Navbar />
      </div>

      <div className="bg-white">
        <AvailableJobs />
      </div>
      <div className="sm:mx-20 mb-24 hidden sm:block">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center mb-5">
            <h3 className="font-bold text-4xl ">Latest Jobs</h3>
            <form action="" className="flex  flex-row">
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
            </form>
          </div>
        </div>

        {/* Start of the table */}
        <table className="border-0 w-full  jobs-table">
          <thead className="py-20 bg-yellow-100">
            <tr className="py-20">
              {rowHeadings.map((x) => (
                <th
                  className={x.id === 1 ? "text-left py-4 pl-8" : "text-left"}
                >
                  {x.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jobs.map((x) => (
              <tr className="sm:pt-40 " key={x.id}>
                <td className="font-bold  text-gray-800">
                  <div className="flex flex-row">
                    <span className="hidden sm:block">
                      <img src={x.logo} loading="lazy" alt="" />
                    </span>
                    <p className="ml-4">{x.title}</p>
                  </div>
                </td>
                <td className="text-gray-800">{x.type}</td>
                <td className="text-gray-800">UGX {x.timePosted}</td>
                <td className="text-gray-800">{x.amount}</td>
                <td className="">
                  <button className="border-gray-500 mx-5 border-2 px-5 py-2.5 hover:bg-yellow-500 hover:border-transparent">
                    {x.btnText}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="sm:mx-20 mx-8">
        <ImageSection descText="Find Jobs" />
      </div>

      <CTA ctaText="Create my resume" />
      <div>
        <Testimonials testmonialHeading="You are in good hands, we are trusted by more than a thousand companies" />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
