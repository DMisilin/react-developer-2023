import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Floor } from './Floor';

export default {
  title: 'Floor',
  component: Floor,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/game',
      searchParams: { player1: 'Misha', player2: 'Sasha' },
    },
  },
  argTypes: {
    groundType: {
      type: 'string',
      description: 'Стиль/тип поля',
      options: ['yellow', 'sky'],
      defaultValue: 'yellow',
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (arg) => <Floor {...arg} />;

export const Default = Template.bind({});
Default.args = {
  groundType: 'yellow',
};
