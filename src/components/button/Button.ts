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

    /* Estilos para o botão secundário */
    .button--secondary {
      background-color: #f3f3f3;
      width: 98px;
      height: 37px;
      color: #333;
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

  /** Define se o botão é primário ou secundário */
  @property({ type: Boolean }) primary = false;

  /** Define a cor de fundo do botão */
  @property({ type: String }) backgroundColor = '';

  /** Define o tamanho do botão */
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Define o texto do botão */
  @property({ type: String }) label = 'Button';

  /** Função chamada ao clicar no botão */
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