import { Button } from '@mui/material';
import styled from '@emotion/styled';

const StyledButton = styled(Button)({
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
      style={{}}
    >
      {props.children}
    </StyledButton>
  );
};
