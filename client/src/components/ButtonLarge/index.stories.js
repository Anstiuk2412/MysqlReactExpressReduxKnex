import { ButtonLarge } from './index';
import { Delete as DeleteIcon } from '@mui/icons-material';
import React from 'react';

export default {
  title: 'ButtonLarge',
  component: ButtonLarge,
  argTypes: {
    className: {
      control: {
        type: 'select',
        options: ['classic', 'dark', 'classicHover'],
      },
    },
    onClick: { action: 'Button click' },
  },
};

const Template = (args) => <ButtonLarge {...args} />;

//👇 Each story then reuses that template
export const ButtonLargeClassic = Template.bind({});

ButtonLargeClassic.args = {
  children: 'ButtonLarge',
  variant: 'outlined',
};

export const ButtonLargeWithIcon = Template.bind({});

ButtonLargeWithIcon.args = {
  children: 'ButtonLarge',
  variant: 'outlined',
  startIcon: <DeleteIcon />,
};
