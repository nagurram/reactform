import React from "react";
import "./FormInput.css";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string };

function FormInput(props: Props) {
  return (
    <>
      <div className="row mt-2">
        <div className="col-md-2 mb-2 d-flex justify-content-end align-items-end pe-1">
          <label>{props.label}:</label>
          <span className="formInputRequired">{props.required && "*"}</span>
        </div>
        <div className="col-md-10">
          <input {...props} className="form-control textfield" />
        </div>
      </div>
    </>
  );
}

export default FormInput;
