import React from "react";

//Assets
import Anna from "./../assets/Ann.png";
import Rodnae from "./../assets/Rodnae.png";
import CheckFilledIcon from "./../assets/CheckFilled.svg";
import CheckIcon from "./../assets/Check.svg";

const ImageSection = (props) => {
  const { descText } = props;

  const imageText = [
    {
      id: 1,
      icon: CheckFilledIcon,
      h3Text: "Keyword reasearch",
      paragrapgh:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    },
    {
      id: 2,
      icon: CheckIcon,
      h3Text: "Keyword reasearch",
      paragrapgh:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    },
    {
      id: 3,
      icon: CheckIcon,
      h3Text: "Keyword reasearch",
      paragrapgh:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    },
  ];

  return (
    <>
      <>
        <div className="flex flex-col sm:flex-row justify-between sm:mr-8  sm:mb-12 mb-0 items-center ">
          <img
            loading="lazy"
            src={Anna}
            className="sm:h-96 md:w-1/2 w-full h-full md:h-1/2  sm:w-80"
            alt=""
          />

          <div className="flex flex-col ml-2 sm:ml-12 ">
            <h4 className=" font-bold text-3xl mb-10 pt-8">
              We can help you find <br className="hidden sm:inline" /> your job
              easy
            </h4>
            {imageText.map((x) => (
              <div key={x.id} className="flex flex-row  justify-between  ">
                <img
                  loading="lazy"
                  src={x.icon}
                  alt=""
                  className={x.id !== 1 ? "mr-6 h-5 mt-4" : "mr-6 h-7 mt-4"}
                />
                <div className="flex flex-col mb-6">
                  <h4 className="text-2xl font-bold mb-2.5">{x.h3Text}</h4>
                  <p>{x.paragrapgh}</p>
                </div>
              </div>
            ))}
            <span>
              <button className="bg-yellow-400 mb-24 py-4 px-20 text-black">
                {descText}
              </button>
            </span>
          </div>
        </div>
      </>

      {/* Start of the second image block */}
      <>
        <div className="flex flex-col-reverse sm:flex-row justify-between sm:mr-8  mb-12 items-center ">
          <div className="flex flex-col mr-12 ">
            <h4 className=" font-bold sm:text-3xl text-2xl mb-10 pt-8 ">
              Get the best candidate <br className="hidden sm:inline" /> for the
              Job
            </h4>
            {imageText.map((x) => (
              <div key={x.id} className="flex flex-row  justify-between  ">
                <img
                  loading="lazy"
                  src={x.icon}
                  alt=""
                  className={x.id !== 1 ? "mr-6 h-5 mt-4" : "mr-6 h-7 mt-4"}
                />
                <div className="flex flex-col mb-6">
                  <h4 className="sm:text-2xl text-lg font-bold mb-2.5">
                    {x.h3Text}
                  </h4>
                  <p>{x.paragrapgh}</p>
                </div>
              </div>
            ))}

            <span>
              <button className="bg-yellow-400 mb-24 py-4 px-16 text-black">
                Find a candidate
              </button>
            </span>
          </div>

          <img
            loading="lazy"
            src={Rodnae}
            className="sm:h-96 md:w-1/2 md:h-1/2  sm:w-80"
            alt=""
          />
        </div>
      </>
    </>
  );
};

export default ImageSection;
