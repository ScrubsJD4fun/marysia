import type { FC } from "react";
import type { IFormFieldProps } from "../../../Interfaces/Movies";
import "./FormField.css";

export const FormField: FC<IFormFieldProps> = ({
  children,
  errorMessage,
}) => {
  return (
    <label className="form-field">
      {children}
      {errorMessage && (
        <span className="form-field__error-text">{errorMessage}</span>
      )}
    </label>
  );
};
