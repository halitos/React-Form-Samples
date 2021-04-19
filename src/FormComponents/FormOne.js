import React, { useState } from "react";
import "./FormOne.css";

export default function FormOne() {
  const [data, setData] = useState({
    fullName: "",
    address: "",
  });
  const [show, setShow] = useState(false);

  const changeHandler = (e) => {
    const updatedData = { ...data, [e.target.name]: e.target.value };
    setData(updatedData);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setShow(true);
  };

  return (
    <>
      <form className="formGroup" onSubmit={submitHandler}>
        <h3 className="form-title">Form Sample-1</h3>
        <label>Full Name</label>
        <input
          placeholder="Enter your input"
          className="inputArea"
          onChange={changeHandler}
          name="fullName"
          value={data.fullName}
        ></input>
        <label>Address</label>
        <textarea
          placeholder="Enter more text"
          className="text-area"
          onChange={changeHandler}
          name="address"
          value={data.address}
        ></textarea>
        <button className="submitBtn">Submit</button>
      </form>
      {show && (
        <div className="result">
          <h3>Props to send</h3>
          <p>Full Name: {data.fullName}</p>
          <p>Address: {data.address}</p>
          <button className="submitBtn" onClick={() => setShow(false)}>
            Hide
          </button>
        </div>
      )}
    </>
  );
}
