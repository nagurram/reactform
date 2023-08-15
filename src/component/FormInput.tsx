import React, { useState } from "react";
import "./FormInput.css";
import { ChangeEvent } from "react";
import IFormInput from "../Models/IFormInput";

function FormInput(
  { id, name, lable, placeHolder, value, formInputType }: IFormInput,
  onChange: ChangeEvent<HTMLInputElement>
) {
  const [inputvalue, setState] = useState(value);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    console.log(inputvalue);
  };

  return (
    <>
      <div className="row mt-2">
        <div className="col-md-2 mb-2 d-flex justify-content-end align-items-end pe-1">
          <label>{lable}:</label>
        </div>
        <div className="col-md-10">
          <input
            type={formInputType}
            value={inputvalue}
            placeholder={placeHolder}
            className="form-control textfield"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default FormInput;
