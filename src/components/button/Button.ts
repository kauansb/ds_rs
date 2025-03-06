import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import buttonStyles from './button.css?inline'; // Importação do CSS como string

@customElement('ds-button')
export class Button extends LitElement {
  static styles = [unsafeCSS(buttonStyles)]; // Injeta o CSS no Shadow DOM
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