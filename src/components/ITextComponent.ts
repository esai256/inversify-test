import IInputComponent from "./IInputComponent";
import ILabeledComponent from "./ILabeledComponent";

export default interface ITextComponent
  extends
  IInputComponent<string>,
  ILabeledComponent {

}
