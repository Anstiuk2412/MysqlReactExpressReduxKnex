import React from 'react';
import { Typography } from '@material-ui/core';
import styled from '@emotion/styled';

export const TextBold = (props) => {
  const StyledText = styled(Typography)({
    position: 'absolute',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '26px',
    /* identical to box height, or 186% */
    letterSpacing: '0.46px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  });

  return (
    <StyledText display="block" align="center" className={props.className}>
      {props.children}
    </StyledText>
  );
};
