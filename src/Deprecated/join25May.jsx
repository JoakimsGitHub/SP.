import React, { useContext, useState } from "react";
import "./joinStyle.css";
import Modal from "./modal.jsx";
import { ClientContext } from "../context/genericContext";

function Join() {
  const { clientDetails, setClientDetails } = useContext(ClientContext);
  const [modal, setModal] = useState(false);
  const [isCheckBoxMarked, setCheckBoxMarked] = useState(false);
  const [checkboxAnimation, setCheckboxAnimation] = useState(false);

  const placeholderText = "Please enter your ";

  // [name]: value mean the name attribute and the value attribute of the input elements.
  // [] using the array syntax for setting the object key by variable.
  // The value of the value attribute is set by the clientDetails state, which equals the current value of the input field. Its initialized as an empty string but gets updated when the input field is filled (user interaction), re-rendering the component.
  function handleChange(event) {
    const { name, value } = event.target;
    setClientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    console.log(clientDetails);
  }

  function handleCheckboxChange(event) {
    setCheckBoxMarked(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isCheckBoxMarked) {
      console.log(clientDetails);
    } else {
      console.log("Please agree to the terms and conditions.");
      setCheckboxAnimation(true);
      setTimeout(() => {
        setCheckboxAnimation(false);
      }, 500);
    }
  }

  const buttonClass = checkboxAnimation ? "buttonAnimated" : "buttonStatic";

  const fillInRequest = "Please fill in your details";
  const displayedName =
    clientDetails.firstname.charAt(0).toUpperCase() +
    clientDetails.firstname.slice(1);
  const agreeText = "I agree to the ";
  const termsAndConditionsText = "terms and conditions";

  return (
    <>
      <div>
        <div className="headingContainer">
          <h1 className="headingText">Join Now</h1>
        </div>
        <form className="form1" onSubmit={handleSubmit}>
          <h2>
            {fillInRequest}
            {clientDetails.firstname && `, ${displayedName}`}
          </h2>
          <div className="inputFields">
            <label htmlFor="clientFirstname">Your firstname: </label>
            <input
              type="text"
              name="firstname"
              placeholder={`${placeholderText} firstname`}
              onChange={handleChange}
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = fillInRequest)}
              value={clientDetails.firstname}
            />
            <br />
            <label htmlFor="clientSurname">Your surname: </label>
            <input
              type="text"
              name="surname"
              placeholder={`${placeholderText} surname`}
              onChange={handleChange}
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = fillInRequest)}
              value={clientDetails.surname}
            />
            <br />
            <label htmlFor="inputEmail">Your email: </label>
            <input
              type="text"
              name="email"
              placeholder={`${placeholderText} email address`}
              onChange={handleChange}
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = fillInRequest)}
              value={clientDetails.email}
            />
            <br />
            <label htmlFor="inputPhone">Your phone#: </label>
            <input
              type="text"
              name="phone"
              placeholder={`${placeholderText} phone number`}
              onChange={handleChange}
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = fillInRequest)}
              value={clientDetails.phone}
            />
            <br />
          </div>
          <div className="checkbox">
            <input
              id="input2"
              type="checkbox"
              checked={isCheckBoxMarked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="input2">{agreeText}</label>
            <div className="termsContainer" onClick={() => setModal(true)}>
              <p id="termsAndConditions">{termsAndConditionsText}</p>
            </div>
          </div>
          {modal && <Modal setModal={setModal} />}
          <button className={buttonClass} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Join;
