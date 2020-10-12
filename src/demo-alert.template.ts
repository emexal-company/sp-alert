import { html } from 'lit-element';
import { DemoAlert } from './demo-alert.component';

import '@spectrum/sp-alert';
import '@spectrum/sp-container';


export default function template(this: DemoAlert) {
  return html`
  <sp-container>
  <sp-rule medium label="Alert"></sp-rule>
  <sp-demo width="400" height="100">
  <pre><sp-alert error header="Error" content="error."></sp-alert></pre>   
  </sp-demo>
  <sp-demo width="400" height="100">
  <pre><sp-alert help header="Help" content="help."></sp-alert></pre>  
  </sp-demo>
  <sp-demo width="400" height="100">
  <pre><sp-alert info header="info" content="info."></sp-alert></pre>   
  </sp-demo>
  <sp-demo width="400" height="100">
  <pre><sp-alert warning  header="warning" content="warning."></sp-alert></pre>  
  </sp-demo>
  <sp-demo width="400" height="100">
  <pre><sp-alert success header="success" content="success."></sp-alert></pre>  
  </sp-demo>
  <sp-rule medium label="Alert - Button"></sp-rule>
  <sp-demo width="400" height="150">
  <pre><sp-alert error button label="Close" header="Error" content="Error"></sp-alert></pre>   
  </sp-demo>
  <sp-demo width="400" height="150">
  <pre><sp-alert help button label="Close" header="Help"  content="Help."></sp-alert></pre>  
  </sp-demo>
  <sp-demo width="400" height="150">
  <pre><sp-alert info button label="Close" header="info" content="info"></sp-alert></pre>   
  </sp-demo>
  <sp-demo width="400" height="150">
  <pre><sp-alert warning button label="Close"  header="warning" content="warning"></sp-alert></pre>  
  </sp-demo>
  <sp-demo width="400" height="150">
  <pre> <sp-alert success button label="Close"  header="success" content="success"></sp-alert></pre>  
  </sp-demo>
  </sp-container>
  `;
}
