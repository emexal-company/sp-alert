import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import alertStyles from './alert.styles';
import template from './alert.template';
let Alert = class Alert extends Base {
    constructor() {
        super(...arguments);
        this.myTemplate = '';
        this.error = false;
        this.help = false;
        this.info = false;
        this.success = false;
        this.warning = false;
        this.button = false;
        this.Label = "";
        this.header = '';
        this.content = '';
    }
    render() {
        return template.call(this);
    }
};
Alert.componentStyles = alertStyles;
__decorate([
    property({ type: Object }),
    __metadata("design:type", Object)
], Alert.prototype, "myTemplate", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Alert.prototype, "error", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Alert.prototype, "help", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Alert.prototype, "info", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Alert.prototype, "success", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Alert.prototype, "warning", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Alert.prototype, "button", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Alert.prototype, "Label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Alert.prototype, "header", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Alert.prototype, "content", void 0);
Alert = __decorate([
    customElement('sp-alert')
], Alert);
export { Alert };
//# sourceMappingURL=alert.component.js.map