import { css, CSSResultGroup } from 'lit';

export default css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  button {
    color: var(--yte-button-text-color, white);
    background-color: var(--yte-button-background-color, #e60208);

    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 21.5px;
    gap: 2px;

    height: 40px;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;

    align-items: center;
    text-align: center;
    letter-spacing: 1.25px;
  }

  button:hover {
    background-color: var(--yte-button-hover-background-color, #dc050c);
  }

  button:active {
    background-color: var(--yte-button-active-background-color, #f2272d);
    color: var(--yte-button-active-color, rgba(255, 255, 255, 0.7));
  }

  button:disabled:disabled:disabled {
    background-color: var(
      --yte-button-disabled-background-color,
      rgba(0, 0, 0, 0.3614)
    );
    color: var(--yte-button-disabled-text-color, white);
    cursor: not-allowed;
  }

  /* Shapes */

  :host([shape='smooth']) button {
    border-radius: var(--yte-button-border-radius, 10px);
  }

  :host([shape='rounded']) button {
    border-radius: var(--yte-button-border-radius, 999px);
  }

  /* Secondary */

  :host([variant='secondary']) button {
    background-color: var(--yte-button-secondary-background-color, #393939);
  }

  :host([variant='secondary']) button:hover {
    background-color: var(
      --yte-button-secondary-hover-background-color,
      #474747
    );
  }

  :host([variant='secondary']) button:active {
    background-color: var(
      --yte-button-secondary-active-background-color,
      #6e6e6e
    );
  }

  /* Tertiary */

  :host([variant='tertiary']) button {
    background-color: var(--yte-button-tertiary-background-color, transparent);
    border: 1px solid var(--yte-button-tertiary-border-color, #c3060b);
    color: var(--yte-button-tertiary-color, #c3060b);
  }

  :host([variant='tertiary']) button:hover {
    border: 1px solid var(--yte-button-tertiary-hover-border-color, #c71c22);
    color: var(--yte-button-tertiary-hover-color, #c71c22);
  }

  :host([variant='tertiary']) button:active {
    border: 1px solid var(--yte-button-tertiary-active-border-color, #da4848);
    color: var(--yte-button-tertiary-active-color, #da4848);
  }

  :host([variant='tertiary']) button:disabled:disabled:disabled {
    background-color: var(
      --yte-button-tertiary-disabled-background-color,
      transparent
    );
    border: 1px solid
      var(--yte-button-tertiary-disabled-border-color, rgba(0, 0, 0, 0.3614));
    color: var(--yte-button-tertiary-disabled-color, rgba(0, 0, 0, 0.3614));
  }

  /* Sizes */

  :host([size='small']) button {
    height: 32px;
    padding: 16px 20.5px;
  }

  :host([size='large']) button {
    height: 48px;
    padding: 24px 30px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
    overflow: hidden;
  }
` as CSSResultGroup;
