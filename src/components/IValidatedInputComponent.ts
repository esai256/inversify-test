import IInputComponent from "./IInputComponent";

export interface validationFunction<T> {
  (value?: T): boolean
}
export default interface ValidatedInputComponent<T> {
  validationFunction: validationFunction<T>;
  value?: T;
  isValidationActive?: boolean;
  errorMessage?: string;

  isValueValid: boolean;
}
