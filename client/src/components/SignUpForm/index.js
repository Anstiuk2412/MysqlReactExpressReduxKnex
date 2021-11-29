import { InputAdornment } from '@mui/material';
import { ButtonLarge } from 'components/ButtonLarge';
import { registration } from 'actions/users.js';
import styles from './index.module.css';
import { useState } from 'react';
import { TextFieldLarge } from 'components/TextFieldLarge';
import React from 'react';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  return (
    <div className={styles.SingUpForm}>
      <div className={styles.inputName}>
        <TextFieldLarge
          id="name"
          variant="standard"
          type="text"
          label="Name"
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/*<GroupIcon color="primary" />*/}
              </InputAdornment>
            ),
          }}
        />
      </div>
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
                {/*<EmailIcon color="primary" />*/}
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
                {/*<PasswordIcon color="primary" />*/}
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={styles.inputPasswordConfirm}>
        <TextFieldLarge
          id="passwordConfirm"
          variant="standard"
          type="password"
          label="Confirm password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/*<PasswordIcon color="primary" />*/}
              </InputAdornment>
            ),
          }}
        />
      </div>
      <ButtonLarge
        className={styles.buttonSingUp}
        variant="outlined"
        onClick={() => registration(name, email, password, passwordConfirm)}
      >
        CREATE ACCOUNT
      </ButtonLarge>
    </div>
  );
};
