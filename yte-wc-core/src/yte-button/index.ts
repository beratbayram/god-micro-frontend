import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import style from "./index.css"

@customElement('yte-button')
export default class extends LitElement {
  static styles = [style];

  @property({ type: Boolean }) disabled = false;

  render() {
    return html`
      <button ?disabled=${this.disabled}>
        <slot>BUTTON</slot>
        <slot name="icon"></slot>
      </button>
    `;
  }
}
