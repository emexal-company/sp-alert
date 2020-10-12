import { customElement,  property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import alertStyles from './alert.styles';
import template from './alert.template';
import { Button } from '@spectrum/sp-button';
import { Label } from '@spectrum/label/label';

@customElement('sp-alert')
export class Alert extends Base {
  public static componentStyles = alertStyles;

  @property({ type: Object }) myTemplate = '';
  @property({ type: Boolean }) error = false;
  @property({ type: Boolean }) help = false;
  @property({ type: Boolean }) info = false;
  @property({ type: Boolean }) success = false;
  @property({ type: Boolean }) warning = false;
  @property({ type: Boolean }) button = false;
  @property({ type: String }) Label = "";
  @property({ type: String }) header = '';
  @property({ type: String }) content = '';

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-alert': Alert;
  }
}
