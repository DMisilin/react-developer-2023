import React from 'react';
import { Floor } from './Floor';

export default {
  title: 'Floor',
  component: Floor,
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
