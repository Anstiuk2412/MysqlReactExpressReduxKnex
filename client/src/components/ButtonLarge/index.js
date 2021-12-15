import { Button } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';

const StyledButton = styled(Button)({
  '&.classicHover': {
    border: '1px solid #FA4616',
    color: '#FA4616',
    '&:hover': {
      backgroundColor: '#FA4616',
      color: '#fff',
      borderColor: '#fff',
      background: '#FA4616',
      /* Grey/400 */
      border: '2px solid #BDBDBD',
      boxSizing: 'border-box',
      borderRadius: '4px',
    },
  },
  '&.classic': {
    border: '1px solid #FA4616',
    color: '#FA4616',
    '&:hover': {
      background: 'none',
    },
  },
  '&.dark': {
    border: '2px solid #000000',
    color: '#000000',
    '&:hover': {
      background: 'none',
    },
  },
  position: 'absolute',
  maxWidth: '225px',
  maxHeight: '40px',
  minWidth: '225px',
  minHeight: '40px',
});

export const ButtonLarge = (props) => {
  return (
    <StyledButton
      disableRipple
      className={props.className}
      variant={props.variant}
      onClick={props.onClick}
      startIcon={props.startIcon}
    >
      {props.children}
    </StyledButton>
  );
};
