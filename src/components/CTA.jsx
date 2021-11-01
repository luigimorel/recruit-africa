import React from "react";

const CTA = (props) => {
  const { ctaText } = props;

  return (
    <div className="bg-yellow-200 w-full mb-24">
      <div className="flex flex-col  sm:flex-row justify-between items-center  mx-4 sm:mx-32 py-16 sm:py-32 ">
        <span className="sm:w-3/5">
          <p className="text-4xl font-bold mb-6">
            Start your accounting career <br className="hidden sm:inline" />
            creating your resume in 5 minutes
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </span>
        <div className="h-24">
          <button className="bg-yellow-400  mt-8 sm:px-12 py-5  font-bold text-black">
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
