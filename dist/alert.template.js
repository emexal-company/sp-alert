import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import '@spectrum/sp-icon';
export default function template() {
    const classe1 = {
        'spectrum-Alert--error': this.error,
        'spectrum-Alert--help': this.help,
        'spectrum-Alert--info': this.info,
        'spectrum-Alert--success': this.success,
        'spectrum-Alert--warning': this.warning,
    };
    var iconTemplate = [];
    if (this.error) {
        iconTemplate.push(html `
      <sp-icon name="AlertSmall" class="spectrum-Alert-icon"></sp-icon>`);
    }
    if (this.help) {
        iconTemplate.push(html ` 
      <sp-icon name="HelpSmall" class="spectrum-Alert-icon"></sp-icon>`);
    }
    if (this.info) {
        iconTemplate.push(html `
      <sp-icon name="InfoSmall" class="spectrum-Alert-icon"></sp-icon>`);
    }
    if (this.success) {
        iconTemplate.push(html `
      <sp-icon name="SuccessSmall" class="spectrum-Alert-icon"></sp-icon>`);
    }
    if (this.warning) {
        iconTemplate.push(html `
      <sp-icon name="AlertSmall" class="spectrum-Alert-icon"></sp-icon>`);
    }
    var iconButton = [];
    if (this.button) {
        iconButton.push(html `
      <sp-button primary quiet label="${this.Label}"></sp-button>
      `);
    }
    return html `
    <div class="spectrum-Alert ${classMap(classe1)}">
        ${iconTemplate}
        <div class="spectrum-Alert-header">${this.header}</div>
        <div class="spectrum-Alert-content">${this.content}</div>
        <div class="spectrum-Alert-footer">
        ${iconButton}
        </div>
    </div>
        `;
}
//# sourceMappingURL=alert.template.js.map