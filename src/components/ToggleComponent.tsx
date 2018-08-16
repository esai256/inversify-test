import { Vue, Component, Prop } from 'vue-property-decorator';
import IToggleComponent from './IToggleComponent';
import { injectable } from 'inversify';

@injectable()
@Component
export default class ToggleComponent extends Vue implements IToggleComponent {
  @Prop({ default: false }) value?: boolean;

  render() {
    return (
      <input
        type="checkbox"
        checked={this.value}
        onChange={e => this.$emit('change', e.target.checked)}
      />
    );
  }
}
