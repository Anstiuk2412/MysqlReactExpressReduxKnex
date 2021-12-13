import { TextFieldLarge } from './index';
import React from 'react';

export default {
  title: 'TextFieldLarge',
  component: TextFieldLarge,
};

const Template = (args) => <TextFieldLarge {...args} />;

//👇 Each story then reuses that template
export const TextFieldLargeClassic = Template.bind({});

TextFieldLargeClassic.args = {
  variant: 'standard',
  id: '',
  type: '',
  label: '',
  InputProps: '',
};
