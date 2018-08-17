import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class LabelComponent extends Vue {
  @Prop({ default: '' })
  text?: string;

  @Prop({ default: '' })
  postfix?: string;

  get label() {
    return `${this.text}${this.postfix && ` ${this.postfix}`}`;
  }

  render() {
    return (
      <label>
        {this.label}
      </label>
    );
  }
}
