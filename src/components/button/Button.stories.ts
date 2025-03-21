import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from '@storybook/test';
import './Button';

const meta = {
  title: 'Design System/Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: (args) => html`
    <ds-button
      variant=${args.variant}
      backgroundColor=${args.backgroundColor}
      size=${args.size}
      label=${args.label}
      ?disabled=${args.disabled}
      @click=${args.onClick}
    ></ds-button>
  `,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      description: 'Define se o botão é primário ou secundário',
    },
    backgroundColor: {
      control: 'color',
      description: 'Define a cor de fundo do botão',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Define o tamanho do botão',
    },
    label: {
      control: 'text',
      description: 'Define o texto do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Define se o botão está desabilitado',
    },
    onClick: {
      action: 'clicked',
      description: 'Função chamada ao clicar no botão',
    },
  },
  args: {
    variant: 'primary',
    label: 'Button',
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/** Botão primário */
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Login',
  },
};

/** Botão secundário */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Sign Up',
  },
};

/** Botão pequeno */
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Sign out',
  },
};

/** Botão com cor de fundo personalizada */
export const CustomBackground: Story = {
  args: {
    label: 'Custom Background',
    backgroundColor: '#ffcc00',
  },
};

/** Botão desabilitado */
export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};
