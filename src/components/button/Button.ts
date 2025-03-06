import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import buttonStyles from './button.css?inline';

@customElement('ds-button')
export class Button extends LitElement {
  static styles = [unsafeCSS(buttonStyles)];

  /** Variantes do botão: primary (padrão) ou secondary */
  @property({ type: String }) variant: 'primary' | 'secondary' = 'primary';
  @property({ type: String }) backgroundColor? = '';
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  @property({ type: String }) label = 'Button';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Function }) onClick?: () => void;

  private validateSize(size: string): 'small' | 'medium' | 'large' {
    if (!['small', 'medium', 'large'].includes(size)) {
      console.warn(`Invalid size: ${size}. Defaulting to 'medium'.`);
      return 'medium';
    }
    return size as 'small' | 'medium' | 'large';
  }

  render() {
    const validatedSize = this.validateSize(this.size);
    const classes = [
      'button',
      `button--${validatedSize}`,
      `button--${this.variant}`,
    ].join(' ');

    return html`
      <button
        type="button"
        class=${classes}
        style=${this.backgroundColor ? `background-color: ${this.backgroundColor}` : ''}
        @click=${this.onClick}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        aria-disabled=${this.disabled}
      >
        ${this.label}
      </button>
    `;
  }
}