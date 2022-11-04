import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  button {
    color: var(--yte-button-text-color, white);
    background-color: var(--yte-button-background-color, #e60208);

    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 30px;
    gap: 2px;

    height: 48px;

    font-family: Roboto;
    font-style: normal;
    font-size: 14px;
    line-height: 0px;
  }

  button:hover {
    background-color: var(--yte-button-hover-background-color, #dc050c);
  }

  button:active {
    background-color: var(--yte-button-active-background-color, #f2272d);
    color: var(--yte-button-active-color, rgba(255, 255, 255, 0.7));
  }

  button:disabled {
    background-color: var(
      --yte-button-disabled-background-color,
      rgba(0, 0, 0, 0.3614)
    );
    color: var(--yte-button-disabled-text-color, white);
    cursor: not-allowed;
  }
`;
