import ILabeledComponent from './ILabeledComponent';
import IInputComponent from './IInputComponent';
import IValidatedInputComponent from './IValidatedInputComponent';

export default interface IPasswordComponent
  extends
  ILabeledComponent,
  IInputComponent<string>,
  IValidatedInputComponent<string> {

}
