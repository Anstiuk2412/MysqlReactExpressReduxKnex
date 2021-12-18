import { Alert, AlertTitle, Button, Typography } from '@mui/material';
import styles from './index.module.css';
import React from 'react';

export const CustomAlert = (props) => {
  return (
    <Alert
      key={props.message}
      variant="filled"
      severity={props.severity}
      onClose={props.onClick}
      className={`${styles.Alert} styles.${props.severity}`}
    >
      <AlertTitle className={styles.alertTitle}>{props.title}</AlertTitle>
      <Typography className={styles.alertTypography}>
        {props.message}
      </Typography>
      <Button
        className={styles.alertButton}
        size="small"
        onClick={props.onClick}
      >
        CLOSE
      </Button>
    </Alert>
  );
};
