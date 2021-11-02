import React from "react";

//Assets
import { ReactComponent as StarFilledIcon } from "./../assets/StarFilled.svg";
import HR from "./../assets/HR.png";
import { ReactComponent as Star } from "./../assets/Star.svg";

function Testimonials(props) {
  const { testmonialHeading } = props;

  const testomonialText = [
    {
      id: 1,
      img: HR,
      text: "   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
      manager: "Tawio Obi Musa",
      title: "HR Manager, Sectraco",
    },
    {
      id: 2,
      img: HR,
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
      manager: "Tawio Obi Musa",
      title: "HR Manager, Sectraco",
    },
    {
      id: 3,
      img: HR,
      text: "   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
      manager: "Tawio Obi Musa",
      title: "HR Manager, Sectraco",
    },
  ];

  return (
    <div>
      <h4 className="sm:text-4xl text-3xl sm:px-64  font-bold my-0 text-center mb-10">
        {testmonialHeading}
      </h4>

      <div className="flex flex-col md:flex-row justify-between ">
        {testomonialText.map((x) => (
          <div
            key={x.id}
            className="flex flex-col hover:border-yellow-400 border-b-2 shadow-md mr-0  mb-10 sm:mb-20"
          >
            <div className="px-3 pt-3 sm:px-6 sm:pt-10">
              <div className="flex flex-row">
                <span className=" mr-4 sm:mr-7 ">
                  <StarFilledIcon />
                </span>
                <span className=" mr-4 sm:mr-7 ">
                  <StarFilledIcon />
                </span>
                <span className=" mr-4 sm:mr-7 ">
                  <StarFilledIcon />
                </span>
                <span className=" mr-4 sm:mr-7 ">
                  <StarFilledIcon />
                </span>
                <span className=" mr-4 sm:mr-7 ">
                  <Star />
                </span>
              </div>

              <p className="mt-6 mb-4">{x.text}</p>
              <div className="flex flex-col sm:flex-row mb-10">
                <img src={x.img} className="rounded-full mb-5" alt="" />

                <div className="flex flex-col ml-4 ">
                  <h6 className="font-bold">{x.manager}</h6>
                  <p className="text-yellow-300">{x.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
