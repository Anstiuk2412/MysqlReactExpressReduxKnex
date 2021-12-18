import { CustomAlert } from './index';
import React from 'react';

export default {
  title: 'CustomAlert',
  component: CustomAlert,
  argTypes: {
    severity: {
      control: {
        type: 'select',
        options: ['error', 'success'],
      },
    },
    onClick: { action: 'Button click' },
  },
};

const Template = (args) => <CustomAlert {...args} />;

//👇 Each story then reuses that template
export const Alert = Template.bind({});

Alert.args = {
  className: 'ButtonLarge',
  title: 'Title',
  message: 'Message',
};
