import { html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import './index';
import { Story, StorybookDefaultExport } from '../desc';

interface Args {
  slot?: string | typeof nothing;
  disabled?: boolean;
  variant?: string;
  shape?: string;
  size?: string;
}

export default {
  title: 'yte-button',
  args: {
    disabled: false,
    slot: nothing,
    variant: 'primary',
    shape: 'smooth',
    size: 'medium',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    slot: { control: 'text' },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'],
    },
    shape: { control: 'radio', options: ['sharp', 'smooth', 'rounded'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
  },
} as StorybookDefaultExport<Args>;

const Template: Story<Args> = ({
  disabled,
  slot,
  variant,
  shape,
  size,
}: Args) =>
  html`<yte-button
    variant=${variant ?? nothing}
    shape=${shape ?? nothing}
    size=${size ?? nothing}
    ?disabled=${disabled}
    >${unsafeHTML(slot ?? nothing)}</yte-button
  >`;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Primary.args,
  variant: 'tertiary',
};

export const Slotted = Template.bind({});
Slotted.args = {
  ...Primary.args,
  slot: `<img height="20" src="/assets/wc-icon.svg" alt="wc-icon" slot="icon"/>`,
};
