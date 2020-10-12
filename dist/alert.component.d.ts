import { Base } from '@spectrum/sp-base';
export declare class Alert extends Base {
    static componentStyles: import("lit-element").CSSResult;
    myTemplate: string;
    error: boolean;
    help: boolean;
    info: boolean;
    success: boolean;
    warning: boolean;
    button: boolean;
    Label: string;
    header: string;
    content: string;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-alert': Alert;
    }
}
