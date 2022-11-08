import { CSSResultGroup, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import style from './index.css';
import { Shape, Size, Variant } from './enums';

@customElement('yte-button')
export default class extends LitElement {
  static styles: CSSResultGroup = [style];

  @property({ type: Boolean }) disabled = false;

  @property({ type: String }) variant: Variant = Variant.primary;

  @property({ type: String }) shape: Shape = Shape.sharp;

  @property({ type: String }) size: Size = Size.medium;

  render() {
    return html`
      <button ?disabled=${this.disabled}>
        <div>
          <slot>BUTTON</slot>
          <slot name="icon"></slot>
        </div>
      </button>
    `;
  }
}
