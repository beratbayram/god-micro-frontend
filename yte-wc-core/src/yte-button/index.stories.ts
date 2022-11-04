import { html, nothing, TemplateResult } from 'lit';
import '.';
import { Story } from '../desc';

export default {
  title: 'yte-button',
  component: 'yte-button',
  argTypes: {
    disabled: { control: 'boolean' },
    slot: { control: 'text' },
  },
};

interface ArgTypes {
  disabled?: boolean;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({ slot, disabled = false }: ArgTypes) =>
  html`<yte-button ?disabled=${disabled}>${slot ?? nothing}</yte-button>`;

export const Regular = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  ...Regular.args,
  disabled: true,
};

export const Slotted = Template.bind({});
Slotted.args = {
  ...Regular.args,
  slot: html`<p>Slotted content</p>`,
};
