import { ChangeEvent, ChangeEventHandler } from "react";

export default interface IFormInput {
  id: Number;
  formInputType: "text" | "date" | "password" | "email";
  name: string;
  value: string;
  placeHolder: string;
  lable?: string;
  onchange: ChangeEventHandler<HTMLInputElement>;
}
