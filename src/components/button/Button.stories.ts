import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Button';

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => html`
    <ds-button
      primary=${args.primary}
      backgroundColor=${args.backgroundColor}
      size=${args.size}
      label=${args.label}
      @click=${args.onClick}
    ></ds-button>
  `,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
  },
  args: {
    primary: false,
    label: 'Button',
    onClick: () => console.log('Button clicked!'),
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Login',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Sign Up',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};