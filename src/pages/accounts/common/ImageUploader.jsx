import React from "react";

function ImageUploader(props) {
  const { onChange, label, className, src } = props;

  return (
    <div className={className}>
      <label htmlFor="image" className="text-yellow-800 font-bold">
        <input
          type="image"
          accept=".png/.jpg/.jpeg"
          src={src}
          onChange={onChange}
          alt=""
        />
        <span className="py-2 px-14 cursor-pointer bg-yellow-200 text-yellow-800">
          {label}
        </span>
      </label>
    </div>
  );
}

export default ImageUploader;
