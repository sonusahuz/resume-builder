import { ButtonHTMLAttributes } from "react";

const Button: React.FunctionComponent<
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...attributes }) => {
  return (
    <button
      {...attributes}
      className="px-2 py-2 rounded  bg-indigo-500 text-white w-28"
    >
      {children}
    </button>
  );
};

export default Button;
