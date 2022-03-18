import styles from './index.module.css';
import { SignIn } from 'components/SignInForm';
import { SignUp } from 'components/SignUpForm';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, ButtonGroup, Container } from '@mui/material';

const AuthForm = () => {
  const history = useHistory();
  const signStatus = history.location.pathname === '/signIn';
  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#252525', height: '70vh', marginTop: '10vh' }}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={() => history.push('/signIn')}
            sx={{ fontSize: 'h3.fontSize' }}
            className={styles.buttonSign}
          >
            SignIn
          </Button>
          <Button
            onClick={() => history.push('/signUp')}
            sx={{ fontSize: 'h3.fontSize' }}
            className={styles.buttonSign}
          >
            SignUp
          </Button>
        </ButtonGroup>
        <div>{signStatus ? <SignIn /> : <SignUp />}</div>
      </Box>
    </Container>
  );
};
export default AuthForm;
