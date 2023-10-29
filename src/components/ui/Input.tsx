import { InputHTMLAttributes } from "react";

const Input: React.FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = ({
  ...attributes
}) => {
  return (
    <input {...attributes} className="px-2 p-4 rounded border w-[500px]" />
  );
};

export default Input;
