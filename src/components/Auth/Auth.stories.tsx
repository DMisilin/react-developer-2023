import React from 'react';

import { Auth } from './Auth';
import { Provider } from 'react-redux';
import store from '../../lesson-24';

export default {
  title: 'Auth',
  component: Auth,
  argTypes: {},
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = (arg) => <Auth {...arg} />;

export const Default = Template.bind({});
Default.args = {};
