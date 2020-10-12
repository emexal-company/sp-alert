import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-alert.styles';
import template from './demo-alert.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Alert } from '@spectrum/sp-alert';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-alert')
export class DemoAlert extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-alert': DemoAlert;
  }
}
