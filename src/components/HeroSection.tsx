import React from "react";

const HeroSection = (props) => {
  const { heading, btnText, background, descText } = props;
  return (
    <div
      className={` ${background} bg-cover h-auto bg-no-repeat items-center mb-24 `}
    >
      <div className="bg-overlay">
        <div className="sm:ml-20 ml-10">
          <p className="mb-2.5 text-white pt-36">{heading}</p>
          <h3 className="text-white mb-5 text-4xl">
            We get you the best <br className="hidden sm:inline" /> {descText}
          </h3>
          <p className="text-gray-50 mb-5">
            Lorem Ipsum is simply dummy text of the{" "}
            <br className="hidden sm:inline" /> printing and typesetting
            industry. Lorem <br className="hidden sm:inline" /> Ipsum has been
            the industry's standard <br className="hidden sm:inline" />
            dummy text ever since
          </p>
          <button className="bg-yellow-400 mb-24 py-4  px-20 text-black">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
