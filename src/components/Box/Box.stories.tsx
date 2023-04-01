import React from 'react';

import Box from './Box';

export default {
  title: 'Box',
  component: Box,
  argTypes: {
    point: {
      type: 'number',
      description: 'Количество очков',
      defaultValue: 1,
      options: [0, 1, 2, 3, 4, 5],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (arg) => <Box {...arg} />;

export const Default = Template.bind({});
Default.args = {
  point: 0,
};
