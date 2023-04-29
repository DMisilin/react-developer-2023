import React from 'react';

import { Score } from './Score';

export default {
  title: 'Score',
  component: Score,
  argTypes: {
    leftUserName: {
      type: 'string',
      description: 'Имя пользователя слева',
      defaultValue: 'User A',
    },
    rightUserName: {
      type: 'string',
      description: 'Имя пользователя справа',
      defaultValue: 'User B',
    },
    leftPoint: {
      type: 'number',
      description: 'Очки пользователя слева',
      defaultValue: 0,
    },
    rightPoint: {
      type: 'number',
      description: 'Очки пользователя справа',
      defaultValue: 0,
    },
  },
};

const Template = (arg) => <Score {...arg} />;

export const Default = Template.bind({});
Default.args = {
  leftUserName: 'User Left',
  rightUserName: 'User Right',
  leftPoint: 0,
  rightPoint: 0,
};
