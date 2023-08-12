export default interface IFormInput {
    FormInputType: "text" | "date" | "password" | "email";
    Name: string;
    Value: string;
    PlaceHolder: string
    Lable?: string;
}