import { Button } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';

const StyledBigButton = styled(Button)({
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.15)',
  },
  borderRadius: 0,
  maxWidth: '100%',
  maxHeight: '67px',
  minWidth: '100%',
  minHeight: '67px',
  '&.active': { borderBottom: '3px solid #FA4616' },
  '&.disable': { borderBottom: '3px solid #6C757D' },
});

export const ButtonBig = (props) => {
  return (
    <StyledBigButton
      disableRipple
      className={props.className}
      variant={props.variant}
      onClick={props.onClick}
      style={{}}
    >
      {props.children}
    </StyledBigButton>
  );
};
