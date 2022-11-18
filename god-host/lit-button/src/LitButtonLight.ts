import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-button-light')
export class LitButtonLight extends LitElement {
  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <button
        style="color: var(--lit-button-text-color)"
        @click=${this.__increment}
      >
        Counter: ${this.counter}
      </button>
    `;
  }
}
