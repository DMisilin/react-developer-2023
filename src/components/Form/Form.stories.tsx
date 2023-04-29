import React from 'react';

import Form from './Form';

export default {
  title: 'Form',
  component: Form,
  argTypes: {},
};

const Template = (arg) => <Form {...arg} />;

export const Default = Template.bind({});
Default.args = {};
