import React from "react";
import "./App.css";
import FormInput from "./component/FormInput";
import "bootstrap/dist/css/bootstrap.css";
import IFormInput from "./Models/IFormInput";

function App() {
  let username: IFormInput = {
    Lable: "User Name",
    Value: "",
    PlaceHolder: "User Name",
    FormInputType: "text",
    Name: "txtUserName",
  };

  let password: IFormInput = {
    Lable: "Password",
    Value: "",
    PlaceHolder: "Password",
    FormInputType: "password",
    Name: "txtPassword",
  };

  let dob: IFormInput = {
    Lable: "Date Of birth",
    Value: "",
    PlaceHolder: "DD/MM/YYYY",
    FormInputType: "date",
    Name: "txtdob",
  };

  let uemail: IFormInput = {
    Lable: "E-Mail",
    Value: "",
    PlaceHolder: "E-Mail",
    FormInputType: "email",
    Name: "txtdob",
  };

  return (
    <>
      <FormInput
        FormInputType={username.FormInputType}
        Name={username.Name}
        Lable={username.Lable}
        Value={username.Value}
        PlaceHolder={username.PlaceHolder}
      />
      <FormInput
        FormInputType={password.FormInputType}
        Name={password.Name}
        Lable={password.Lable}
        Value={password.Value}
        PlaceHolder={password.PlaceHolder}
      />

      <FormInput
        FormInputType={dob.FormInputType}
        Name={dob.Name}
        Lable={dob.Lable}
        Value={dob.Value}
        PlaceHolder={dob.PlaceHolder}
      />
      <FormInput
        FormInputType={uemail.FormInputType}
        Name={uemail.Name}
        Lable={uemail.Lable}
        Value={uemail.Value}
        PlaceHolder={uemail.PlaceHolder}
      />
    </>
  );
}

export default App;
