import React from "react";

// Components
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import HeroSection from "../components/HeroSection";
import ImageSection from "../components/ImageSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Plans from "../components/Plans";

const FindCandidates = () => {
  return (
    <>
      <div className="sm:mx-12 mx-3">
        <Navbar />
      </div>
      <HeroSection
        heading="For Employers"
        background="bg-employer"
        descText="candidates for the job "
        btnText="Find Candidates"
      />
      <div className="sm:mx-12 mx-3">
        <ImageSection descText="Post a job" />
      </div>
      <Plans />
      <CTA ctaText="Start recruiting" />
      <Testimonials testmonialHeading="You are in good hands, see what other recruiters are saying about Recruit4Africa" />
      <Footer />
    </>
  );
};

export default FindCandidates;
