import { Component, Vue, Inject } from "vue-property-decorator";
import { inject, injectable, interfaces } from "inversify";
import IDENTIFIERS from "./Identifiers";
import IEmailComponent from "./IEmailComponent";
import IFormComponent from './IFormComponent';
import "reflect-metadata";

@injectable()
@Component
export default class FormComponent extends Vue implements IFormComponent {
  @Inject()
  private EmailComponent?: interfaces.Newable<IEmailComponent>;

  render() {
    const EmailComponent = this.EmailComponent;

    if (EmailComponent) {
      return (
        <div>

          <h2>Form Component</h2>

          <EmailComponent value="blarg2345" />

        </div>
      );
    }
    else {
      return (
        <div style="color: red">EmailComponent is undefined</div>
      )
    }
  }
}
