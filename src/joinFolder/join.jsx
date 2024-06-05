import React, { useContext, useState } from "react";
import "./joinStyle.css";
import Modal from "../modalFolder/modal";
import { modalData } from "../modalFolder/modalData.jsx";
import { ClientContext } from "../context/genericContext.jsx";
import { joinInputField } from "../inputFieldFolder/inputFieldData.jsx";
import InputField from "../inputFieldFolder/inputField";
import Payment from "../paymentFolder/payment.jsx";

function Join() {
  const { headings, paragraphs } = modalData;
  const { clientDetails, setClientDetails } = useContext(ClientContext);
  const [modal, setModal] = useState(false);
  const [isCheckBoxMarked, setCheckBoxMarked] = useState(false);
  const [checkboxAnimation, setCheckboxAnimation] = useState(false);
  const placeholderText = "Please enter your ";

  function handleChange(event) {
    const { name, value } = event.target;
    setClientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
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

  function showModal() {
    setModal(true);
  }

  const buttonClass = checkboxAnimation ? "buttonAnimated" : "buttonStatic";

  const fillInRequest = "Please fill in your details";
  const displayedName =
    clientDetails.firstname &&
    clientDetails.firstname.charAt(0).toUpperCase().trim() +
      clientDetails.firstname.slice(1).trim();
  const agreeText = "I agree to the ";
  const termsAndConditionsText = "terms and conditions";

  return (
    <div>
      <div className="headingContainer">
        <h1 className="headingText">Join Now</h1>
      </div>
      <form className="form1" onSubmit={handleSubmit}>
        <h2>
          {fillInRequest}
          {clientDetails.firstname && `, ${displayedName}`}
        </h2>
        <InputField field={joinInputField} />
        <div>
          <Payment />
        </div>
        <div className="checkbox">
          <input
            id="input2"
            type="checkbox"
            checked={isCheckBoxMarked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="input2">{agreeText}</label>
          <div className="termsContainer" onClick={showModal}>
            <p id="termsAndConditions">{termsAndConditionsText}</p>
          </div>
        </div>
        {modal && (
          <Modal
            headings={headings}
            paragraphs={paragraphs}
            setModal={setModal}
          />
        )}
        <button className={buttonClass} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Join;
