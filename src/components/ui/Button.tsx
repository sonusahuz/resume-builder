import { ButtonHTMLAttributes } from "react";

const Button: React.FunctionComponent<
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...attributes }) => {
  return <button {...attributes}>{children}</button>;
};

export default Button;
