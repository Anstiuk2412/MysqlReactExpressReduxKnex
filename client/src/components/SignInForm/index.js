import { InputAdornment, Link, TextField } from '@mui/material';
import { ButtonLarge } from '../ButtonLarge';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { login } from '../../actions/users';
import { useState } from 'react';
import styles from './index.module.css';
import { TextFieldLarge } from '../TextFieldLarge';

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
                <EmailIcon color="primary" />
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
                <PasswordIcon color="primary" />
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
        onClick={() => login(email, password)}
      >
        SIGN IN
      </ButtonLarge>
    </div>
  );
};
