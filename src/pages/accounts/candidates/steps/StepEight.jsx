import React, { useState } from "react";

// Assets
import { ReactComponent as UploadIcon } from "./../../../../assets/accounts/Upload.svg";

// Components
import ImageUploader from "../../common/ImageUploader";

const StepEight = () => {
  const [image, setImage] = useState("");
  return (
    <>
      <h3 className=" font-bold text-2xl mb-4">Upload profile picture </h3>
      <div className="rounded border border-gray-400 border-dashed w-72">
        <div className="p-8 flex flex-col justify-center items-center">
          <UploadIcon />
          <h6 className="text-gray-400 mb-4 text-lg">Drag & drop file here</h6>
          <p className="text-gray-400 mb-6">File format: Png/Jpeg</p>

          <ImageUploader label="Browse File" />
          <span className="flex flex-row py-4 justify-between ">
            <span className=" text-gray-700 text-xs">My passport.jpeg</span>
            <span className="text-yellow-500 ml-2 text-xs font-bold">
              Change Now
            </span>
          </span>

          <p className="text-gray-400 mt-3">Maximum file size 5MB</p>
        </div>
      </div>{" "}
    </>
  );
};

export default StepEight;
