import React from 'react';

import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

const Template = (arg) => <Rating {...arg} />;

export const Default = Template.bind({rating: []});
