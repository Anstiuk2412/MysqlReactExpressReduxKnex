import { InputAdornment, Link } from '@mui/material';
import { ButtonLarge } from 'components/ButtonLarge';
import { useState } from 'react';
import styles from './index.module.css';
import { TextFieldLarge } from 'components/TextFieldLarge';
import { login } from 'actions/users.js';
//import PasswordIcon from '@mui/icons-material/Password';
//import EmailIcon from '@mui/icons-material/Email';
import React from 'react';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.SingInForm}>
      <div className={styles.inputEmail}>
        <TextFieldLarge
          id="email"
          variant="standard"
          type="text"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/*<EmailIcon color='primary' />*/}
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={styles.inputPassword}>
        <TextFieldLarge
          id="password"
          variant="standard"
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/*<PasswordIcon color='primary' />*/}
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Link to={'/'} className={styles.forgotPassword} underline="none">
        FORGOT YOUR PASSWORD?
      </Link>
      <ButtonLarge
        className={styles.buttonSingIn}
        variant="outlined"
        onClick={() =>
          login(
            email,
            password /*setAlert,setAlertTypography,setAlertTitle,setAlertSeverity*/,
          )
        }
      >
        SIGN IN
      </ButtonLarge>
    </div>
  );
};
