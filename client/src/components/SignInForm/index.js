import { InputAdornment, Link } from '@mui/material';
import { ButtonLarge } from 'components/ButtonLarge';
import { useCallback, useState } from 'react';
import styles from './index.module.css';
import { TextFieldLarge } from 'components/TextFieldLarge';
import { login } from 'actions/users.js';
import { Password as PasswordIcon } from '@mui/icons-material';
import { Email as EmailIcon } from '@mui/icons-material';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { CustomAlert } from '../Alert';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerts, setAlerts] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const sendRequest = useCallback(async () => {
    const values = await login(email, password);
    setAlerts(values);
    if (values[0].redirect) {
      setRedirect(values[0].redirect);
    }
  }, [email, password]);

  const deleteAlert = (deletedAlertValue) => {
    const updatedAlerts = alerts.filter(
      (alert) => alert.message !== deletedAlertValue,
    );
    setAlerts(updatedAlerts);
  };

  if (redirect === true) {
    return <Redirect exact to={'/'} />;
  }

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
      <Link to={'/password'} className={styles.forgotPassword} underline="none">
        FORGOT YOUR PASSWORD?
      </Link>
      <ButtonLarge
        className={`classicHover ${styles.buttonSingIn}`}
        variant="outlined"
        onClick={sendRequest}
      >
        SIGN IN
      </ButtonLarge>
      <div className={styles.alertBox}>
        {alerts.map((alert) => (
          <CustomAlert
            key={alert.message}
            message={alert.message}
            onClick={() => deleteAlert(alert.message)}
            severity={alert.severity}
            title={alert.title}
          />
        ))}
      </div>
    </div>
  );
};
