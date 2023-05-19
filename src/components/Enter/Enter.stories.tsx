import React from 'react';

import { Enter } from './Enter';

export default {
  title: 'Enter',
  component: Enter,
  argTypes: {},
};

const Template = (arg) => <Enter {...arg} />;

export const Default = Template.bind({});
Default.args = {};
