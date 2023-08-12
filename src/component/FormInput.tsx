import React, { useState } from "react";
import "./FormInput.css";
import { ChangeEvent } from "react";
import IFormInput from "../Models/IFormInput";

function FormInput({
  Name,
  Lable,
  PlaceHolder,
  Value,
  FormInputType,
}: IFormInput) {
  const [inputvalue, setState] = useState(Value);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    console.log(inputvalue);
  };

  return (
    <>
      <div className="row mt-2">
        <div className="col-md-2 mb-2 d-flex justify-content-end align-items-end pe-1">
          <label>{Lable}:</label>
        </div>
        <div className="col-md-10">
          <input
            type={FormInputType}
            value={inputvalue}
            placeholder={PlaceHolder}
            className="form-control textfield"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default FormInput;
