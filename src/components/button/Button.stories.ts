import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { fn } from '@storybook/test';
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
    /** Define se o botão é primário ou secundário */
    primary: {
      control: 'boolean',
      description: 'Define se o botão é primário ou secundário',
    },
    /** Define a cor de fundo do botão */
    backgroundColor: {
      control: 'color',
      description: 'Define a cor de fundo do botão',
    },
    /** Define o tamanho do botão */
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Define o tamanho do botão',
    },
    /** Define o texto do botão */
    label: {
      control: 'text',
      description: 'Define o texto do botão',
    },
    /** Função chamada ao clicar no botão */
    onClick: {
      action: 'clicked',
      description: 'Função chamada ao clicar no botão',
    },
  },
  args: {
    primary: false,
    label: 'Button',
    onClick: fn(),
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/** Botão primário */
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Login',
  },
};

/** Botão secundário */
export const Secondary: Story = {
  args: {
    primary: false,
    backgroundColor: 'green',
    label: 'Sign Up',
  },
};

/** Botão pequeno */
export const Small: Story = {
  args: {
    size: 'small',
    backgroundColor: 'red',
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
    onClick: () => alert('Este botão está desabilitado!'),
    disabled: true,
  },
};