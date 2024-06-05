import React from "react";

function InputField({ field }) {
  const inputFieldArray = Object.keys(field);

  function renderInputFields() {
    return inputFieldArray.map((inputField) => (
      <div key={inputField}>
        <label htmlFor={inputField}>{field[inputField].label}</label>
        <input
          type={field[inputField].type}
          name={field[inputField].name}
          placeholder={field[inputField].placeholder}
        />
      </div>
    ));
  }

  return <div className="inputFields">{renderInputFields()}</div>;
}

export default InputField;
