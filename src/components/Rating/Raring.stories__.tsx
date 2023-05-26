import React from 'react';

import Rating from 'components/Rating/Rating';
import { Provider } from 'react-redux';
import { store } from '../../store/redux/store.js';

export default {
  title: 'Rating',
  component: Rating,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = (arg) => <Rating {...arg} />;

export const Default = Template.bind({});
