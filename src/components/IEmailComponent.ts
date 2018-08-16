import ITextComponent from "./ITextComponent";
import IValidatedInputComponent from "./IValidatedInputComponent";

export default interface IEmailComponent
  extends
  ITextComponent,
  IValidatedInputComponent<string> {
}
