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

  const frminputs = [
    {
      id: 1,
      lable: "User Name",
      value: "",
      placeHolder: "User Name",
      formInputType: "text",
      name: "txtUserName",
    },
    {
      id: 2,
      lable: "Password",
      value: "",
      placeHolder: "Password",
      formInputType: "password",
      name: "txtPassword",
    },
    {
      id: 3,
      lable: "Date Of birth",
      value: "",
      placeHolder: "DD/MM/YYYY",
      formInputType: "date",
      name: "txtdob",
    },
    {
      id: 4,
      lable: "E-Mail",
      value: "",
      placeHolder: "E-Mail",
      formInputType: "email",
      name: "txtemail",
    },
  ];
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="row">
        {frminputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={
              (Object.keys(values) as (keyof typeof values)[]).find((key) => {
                return values[key] === input.name;
              })!}
            onChange={onChange}
          />
        ))}
      </div>
    </>
  );
}

export default App;
