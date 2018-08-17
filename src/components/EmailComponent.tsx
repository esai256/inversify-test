import { Vue, Component, Prop } from 'vue-property-decorator';
import './EmailComponent.scss';
import IEmailComponent from './IEmailComponent';
import { injectable } from 'inversify';
import "reflect-metadata";

@injectable()
@Component
export default class EmailComponent
  extends Vue
  implements
  IEmailComponent {
  @Prop({ default: '' }) value?: string;
  @Prop({ default: '' }) errorMessage?: string;
  @Prop({ default: false }) isValidationActive?: boolean;
  @Prop({ default: '' }) label?: string;
  @Prop({ default: '' }) labelPostfix?: string;

  get isValueValid(): boolean {
    return this.validationFunction(this.value || '');
  }

  get fullLabel() {
    return `${this.label || ''}${this.labelPostfix && ` ${this.labelPostfix}`}`;
  }

  validationFunction(value?: string): boolean {
    // validation of format with given empty value should succeed,
    // as there should be a specific validation for checking if the value is empty
    return value
      ? /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
      : true;
  }

  render() {
    const classes: string[] = [];

    if (!this.isValueValid) {
      classes.push('invalid');
    }

    return (
      <div>

        <label>{this.label}</label>

        <input
          class={classes.join(' ')}
          type="email"
          value={this.value}
          onInput={e => this.$emit('input', e.target.value)}
        />

        {
          this.isValidationActive
          && this.isValueValid
          && <span>{this.errorMessage}</span>
        }

      </div>
    );
  }
}
