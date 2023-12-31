import React, { ChangeEvent, useState } from "react";
import "./App.css";
import FormInput from "./component/FormInput";
import "bootstrap/dist/css/bootstrap.css";

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

  const handleClick = () => {
    console.log(values);
  };
  const frminputs = [
    {
      id: 1,
      label: "User Name",
      value: "",
      placeHolder: "User Name",
      formInputType: "text",
      name: "txtUserName",
      required: true,
    },
    {
      id: 2,
      label: "Password",
      value: "",
      placeHolder: "Password",
      formInputType: "password",
      name: "txtPassword",
      required: true,
    },
    {
      id: 3,
      label: "Date Of birth",
      value: "",
      placeHolder: "DD/MM/YYYY",
      formInputType: "date",
      name: "txtdob",
      required: false,
    },
    {
      id: 4,
      label: "E-Mail",
      value: "",
      placeHolder: "E-Mail",
      formInputType: "email",
      name: "txtemail",
      required: false,
    },
  ];

  return (
    <>
      <form>
        <div className="container">
          {frminputs.map((input) => (
            <FormInput
              label={input.label}
              type={input.formInputType}
              key={input.name}
              name={input.name}
              placeholder={input.placeHolder}
              required={input.required}
              onChange={onChange}
            />
          ))}
          <input
            type="button"
            className="btn btn-primary"
            value="Save"
            onClick={handleClick}
          ></input>
        </div>
      </form>
    </>
  );
}

export default App;
