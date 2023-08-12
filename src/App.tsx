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
  return (
    <FormInput
      FormInputType={username.FormInputType}
      Name={username.Name}
      Lable={username.Lable}
      Value={username.Value}
      PlaceHolder={username.PlaceHolder}
    />
  );
}

export default App;
