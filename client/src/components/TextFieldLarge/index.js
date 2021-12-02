import { TextField } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';

const TextFieldLargest = styled(TextField)({
  width: '450px',
  height: '45px',
  '& .MuiInput-underline:after': {
    borderBottom: '2px solid #BDBDBD',
  },
  input: {
    color: '#FFFFFF',
  },
});
export const TextFieldLarge = (props) => {
  return (
    <TextFieldLargest
      id={props.id}
      variant={props.variant}
      type={props.type}
      label={props.label}
      onChange={props.onChange}
      InputProps={props.InputProps}
      sx={{ m: 1 }}
      focused
    >
      {props.children}
    </TextFieldLargest>
  );
};
