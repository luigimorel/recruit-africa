import React from "react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import HeroSection from "../components/HeroSection";
import ImageSection from "../components/ImageSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const FindJobs = () => {
  return (
    <>
      <div className="sm:mx-12 mx-3">
        <Navbar />
        <HeroSection
          heading="For candidates"
          background="bg-hero"
          descText="job offers. "
          btnText="Find Jobs"
        />
        <div className="sm:mb-24 mb-8">
          <ImageSection descText="Find Jobs" />
        </div>
      </div>
      <CTA ctaText="Create my resume" />
      <Testimonials testmonialHeading="You are in good hands, we are trusted by more than a thousand companies" />
      <Footer />
    </>
  );
};

export default FindJobs;
