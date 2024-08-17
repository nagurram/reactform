import React, { ChangeEvent, useState } from "react";
import "./App.css";
import FormInput from "./component/FormInput";
import "bootstrap/dist/css/bootstrap.css";
import ModelDialog from "./component/controls/modeldialog";
import useDialog from "./component/controls/hooks/useDialog";

function App() {
  const formDefaultvalues = {
    txtUserName: "",
    txtPassword: "",
    txtdob: "",
    txtemail: "",
  };

  const [values, setValues] = useState(formDefaultvalues);
  const { isOpen, dialogContent, openDialog, closeDialog, confirmDialog } =
    useDialog();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    console.log(values);
  };

  const opendialog = () => {
    openDialog("Dialog Title", "This is the dialog message.");
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
          &nbsp;&nbsp;&nbsp;
          <button className="btn  btn-primary" onClick={opendialog}>
            Open Dialog
          </button>
          <ModelDialog
            isOpen={isOpen}
            dialogContent={dialogContent}
            closeDialog={closeDialog}
            confirmDialog={confirmDialog}
          />
        </div>
      </form>
    </>
  );
}

export default App;
