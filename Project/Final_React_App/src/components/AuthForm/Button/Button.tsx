import type { FC, HTMLAttributes } from "react";
import { Loader } from "../../Loader";
import "./Button.css";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const Button: FC<IButtonProps> = ({
  isLoading,
  isDisabled = isLoading,
  children,
}) => {
  return (
    <button
      disabled={isDisabled}
      className="button"
    >
      
      {isLoading ? <Loader /> : children}
    </button>
  );
};
