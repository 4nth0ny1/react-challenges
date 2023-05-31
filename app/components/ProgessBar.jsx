import React from "react";

const ProgressBar = ({ width: inputWidth }) => {
  return (
    <div className="border-2">
      {inputWidth >= 0 && inputWidth <= 100 ? (
        <div className="bg-pink-700" style={{ width: `${inputWidth}%` }}>
          {inputWidth}%
        </div>
      ) : (
        alert("please enter value less than 100")
      )}
    </div>
  );
};
export default ProgressBar;
