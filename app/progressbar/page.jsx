"use client";

import React from "react";
import ProgressBar from "../components/ProgessBar";
import { useState } from "react";

/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  const [val, setVal] = useState(10);
  const setValuer = (e) => setVal(Number(e.target.value));

  return (
    <>
      <div className="p-10 text-center">
        <h1 className="text-2xl p-4">Progress bar</h1>
        <ProgressBar width={val} />
        <form className="p-4">
          <label for="html">Input Percentage: </label>
          <input
            className="border-2 rounded-xl"
            type="number"
            onChange={setValuer}
          />
        </form>
      </div>
      <hr></hr>
    </>
  );
}
