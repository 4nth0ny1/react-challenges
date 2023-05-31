"use client";
import { useState } from "react";

const initialState = {
  userName: "",
  fullName: "",
  age: "",
};
export default function App() {
  const [form, setValues] = useState(initialState);
  const [display, setDisplay] = useState(false);

  const printValues = (e) => {
    e.preventDefault();
    setDisplay(true);
  };

  const updateField = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl p-4">Submit Form Data</h2>
      <form onSubmit={printValues}>
        <div className="pb-4">
          <div>
            <label className="mr-10" htmlFor="userName">
              Username
            </label>
            <input
              className="border-2 p-2 rounded-xl"
              value={form.userName || ""}
              name="userName"
              onChange={updateField}
            />
          </div>
          <br />
          <div>
            <label className="mr-10" htmlFor="fullName">
              FullName
            </label>
            <input
              className="border-2 p-2 rounded-xl"
              value={form.fullName || ""}
              name="fullName"
              type="text"
              onChange={updateField}
            />
          </div>
          <br />
          <div>
            <label className="mr-10" htmlFor="age">
              Age
            </label>
            <input
              className="border-2 p-2 rounded-xl"
              value={form.age || ""}
              name="age"
              onChange={updateField}
            />
          </div>
          <br />
          <button className="px-6 py-2 rounded-2xl bg-green-500 text-white">
            Submit
          </button>
        </div>
        <hr></hr>
        <div className="p-4">
          {display && (
            <>
              <h4>Request Sent to DB with below request data</h4>
              <ul>
                <li>UserName: {form.userName.toUpperCase()}</li>
                <li>FullName: {form.fullName.toUpperCase()}</li>
                <li>Age: {form.age}</li>
              </ul>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
