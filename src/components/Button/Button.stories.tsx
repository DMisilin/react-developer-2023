import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    text: {
      type: 'string',
      description: 'Текст на кнопке',
      defaultValue: 'Press',
    },
    type: {
      type: 'string',
      description: 'Стиль/тип кнопки',
      options: ['default', 'eco', 'blue'],
      defaultValue: 'default',
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (arg) => <Button {...arg} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Press',
  type: 'default',
};
