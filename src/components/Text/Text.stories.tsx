import React from 'react';

import Text from './Text';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    text: {
      type: 'string',
      description: 'Выводимый текст',
      defaultValue: 'Тут могла быть ваша реклама',
    },
    size: {
      type: 'string',
      description: 'Размер шрифта',
      defaultValue: 'medium',
      options: ['medium', 'big'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (arg) => <Text {...arg} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Пример текста',
};
