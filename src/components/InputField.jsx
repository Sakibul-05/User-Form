import React from "react";
import "../CSS/inputField.css";

const InputField = ({ fieldName, type, placeholder }) => {
  return (
    <>
      <div>
        <label htmlFor={fieldName.split(" ").join("").toLowerCase()}>
          {fieldName}
        </label>
        <br />
        <input
          type={type}
          name={fieldName.split(" ").join("").toLowerCase()}
          id={fieldName.split(" ").join("").toLowerCase()}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default InputField;
