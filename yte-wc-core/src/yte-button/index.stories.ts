import { html, nothing, TemplateResult } from 'lit';
import "./index";
import { Story, StorybookDefaultExport } from '../desc';

interface Args {
  slot?: TemplateResult | string;
  disabled?: boolean;
  variant?: string;
  shape?: string;
  size?: string;
}

export default {
  title: 'yte-button',
  args: {
    disabled: false,
    slot: '',
    variant: "primary",
    shape: 'sharp',
    size: 'medium',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    slot: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    shape: { control: 'select', options: ['sharp', 'smooth', 'rounded'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
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
    >${slot ?? nothing}</yte-button
  >`;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...Primary.args,
  variant: "tertiary",
};
