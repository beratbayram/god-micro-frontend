import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-button')
export class LitButton extends LitElement {
  static styles = css`
    button {
      color: var(--lit-button-text-color);
    }
  `;

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <button @click=${this.__increment}>Counter: ${this.counter}</button>
    `;
  }
}
