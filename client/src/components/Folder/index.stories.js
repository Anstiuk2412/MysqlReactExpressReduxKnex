import { Folder } from './index';
import React from 'react';

export default {
  title: 'Folder',
  component: Folder,
  argTypes: {
    onClick: { action: 'Open Folder' },
  },
};

const Template = (args) => <Folder {...args} />;

//👇 Each story then reuses that template
export const FolderClassic = Template.bind({});

FolderClassic.args = {
  amount: {
    name: 'folder-classic',
    id: '1',
  },
};
