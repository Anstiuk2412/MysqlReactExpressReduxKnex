import { InputAdornment } from '@mui/material';
import { ButtonLarge } from 'components/ButtonLarge';
import { registration } from 'actions/users.js';
import styles from './index.module.css';
import { useCallback, useState } from 'react';
import { TextFieldLarge } from 'components/TextFieldLarge';
import { Email as EmailIcon } from '@mui/icons-material';
import { Group as GroupIcon } from '@mui/icons-material';
import { Password as PasswordIcon } from '@mui/icons-material';
import React from 'react';
import { CustomAlert } from '../Alert';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [alerts, setAlerts] = useState([]);

  const sendRequest = useCallback(async () => {
    const values = await registration(name, email, password, passwordConfirm);
    setAlerts(values.data.message);
  }, [name, email, password, passwordConfirm]);

  const deleteAlert = (deletedAlertValue) => {
    const updatedAlerts = alerts.filter(
      (alert) => alert.message !== deletedAlertValue,
    );
    setAlerts(updatedAlerts);
  };
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
                <GroupIcon color="primary" />
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
                <PasswordIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <ButtonLarge
        className={`classicHover ${styles.buttonSingUp}`}
        variant="outlined"
        onClick={sendRequest}
      >
        CREATE ACCOUNT
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
