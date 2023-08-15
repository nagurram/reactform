import React, { ChangeEvent, useState } from "react";
import "./App.css";
import FormInput from "./component/FormInput";
import "bootstrap/dist/css/bootstrap.css";
import IFormInput from "./Models/IFormInput";

function App() {
  const formDefaultvalues = {
    txtUserName: "",
    txtPassword: "",
    txtdob: "",
    txtemail: "",
  };

  const [values, setValues] = useState(formDefaultvalues);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const frminputs = [
    {
      id: 1,
      label: "User Name",
      value: "",
      placeHolder: "User Name",
      formInputType: "text",
      name: "txtUserName",
      onchange: onChange,
    },
    {
      id: 2,
      label: "Password",
      value: "",
      placeHolder: "Password",
      formInputType: "password",
      name: "txtPassword",
      onchange: onChange,
    },
    {
      id: 3,
      label: "Date Of birth",
      value: "",
      placeHolder: "DD/MM/YYYY",
      formInputType: "date",
      name: "txtdob",
      onchange: onChange,
    },
    {
      id: 4,
      label: "E-Mail",
      value: "",
      placeHolder: "E-Mail",
      formInputType: "email",
      name: "txtemail",
      onchange: onChange,
    },
  ];

  return (
    <>
      <div className="row">
        {frminputs.map((input) => (
          <FormInput
            label={input.label}
            type={input.formInputType}
            key={input.name}
          />
        ))}
      </div>
    </>
  );
}

export default App;
