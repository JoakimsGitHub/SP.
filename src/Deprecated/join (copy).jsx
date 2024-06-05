import React, { useState, useEffect } from "react";
import "./joinStyle.css";

function Join() {
  // useState for onChange event listeners and their related event handlers.
  // Taking in the current value and the function to update the value.
  const [inputName, setName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [inputPhone, setPhone] = useState("");

  function storeName(event) {
    setName(event.target.value);
  }

  function storeEmail(event) {
    setEmail(event.target.value);
  }

  function storePhone(event) {
    setPhone(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputName, inputEmail, inputPhone);
  }

  const fillInRequest = "Please fill in your details";

  // useState for useEffect.
  const [displayedName, setDisplayedName] = useState("");

  // The arguments are the new value (returned output from setDisplayedName) and the dependent value (updated value of inputName).
  useEffect(() => {
    setDisplayedName(
      inputName ? inputName.charAt(0).toUpperCase() + inputName.slice(1) : "",
    );
  }, [inputName]);

  const clientDetails = {
    name: inputName,
    email: inputEmail,
    phone: inputPhone,
  };

  return (
    <>
      <div>
        <h1>Join Now</h1>
        <form className="form1" onSubmit={handleSubmit}>
          {/* Conditionally rendering fillInRequest based on its validity. The && evaluates whether the expression to the left is truthy or falsy. */}
          <h2>
            {fillInRequest}
            {inputName && `, `}
            {displayedName}
          </h2>
          <div className="inputFields">
            <label htmlFor="inputName">Your name: </label>
            <input
              type="text"
              id="inputName"
              placeholder="Enter your name"
              onChange={storeName}
            />

            <br />
            <label htmlFor="inputEmail">Your email: </label>
            <input
              type="text"
              id="inputEmail"
              placeholder="Enter your email address"
              onChange={storeEmail}
            />
            <br />
            <label htmlFor="inputPhone">Your phone#: </label>
            <input
              type="text"
              id="inputPhone"
              placeholder="Enter your phone number"
              onChange={storePhone}
            />
            <br />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="checkbox">
        <ul>
          <li>
            <div>
              <input id="input2" type="checkbox" defaultChecked={false} />
              <label htmlFor="input2">
                I agree to the terms and conditions
              </label>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Join;
