import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ds-button')
export class Button extends LitElement {
  static styles = css`
    /* Estilos base do botão */
    .button {
      display: inline-block;
      cursor: pointer;
      border: 0;
      border-radius: 5px;
      font-weight: 700;
      line-height: 1;
      font-family: 'Inter', sans-serif;
    }

    /* Estilos para o botão primário */
    .button--primary {
      background-color: #0066ff;
      width: 98px;
      height: 37px;
      color: white;
    }

    .button--primary:hover {
      transition-duration: 300ms;
      background-color: #ff8000;
    }

    .button--primary:active {
      background-color: #c9c9c9;
      color: #888888;
    }

    /* Estilos para tamanhos */
    .button--small {
      font-size: 12px;
      padding: 8px 16px;
    }

    .button--medium {
      font-size: 14px;
      padding: 10px 20px;
    }

  `;

  @property({ type: Boolean }) primary = false;
  @property({ type: String }) backgroundColor = '';
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  @property({ type: String }) label = 'Button';
  @property({ type: Function }) onClick?: () => void;

  render() {
    const mode = this.primary ? 'button--primary' : 'button--secondary';
    const classes = ['button', `button--${this.size}`, mode].join(' ');

    return html`
      <button
        type="button"
        class=${classes}
        style=${this.backgroundColor ? `background-color: ${this.backgroundColor}` : ''}
        @click=${this.onClick}
      >
        ${this.label}
      </button>
    `;
  }
}