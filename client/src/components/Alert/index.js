import { Alert, AlertTitle, Button, Typography } from '@mui/material';
import styles from './index.module.css';
import React from 'react';

export const CustomAlert = (props) => {
  const alertValues = props.alertsValues;
  const setAlertsValues = props.setAlertsValues;

  const deleteAlert = (alert) => {
    alertValues.typography.splice(alertValues.typography.indexOf(alert), 1);
    setAlertsValues({
      typography: alertValues.typography,
      severity: alertValues.severity,
      title: alertValues.title,
    });
  };

  return (
    <>
      {alertValues.typography.map((value) => (
        <Alert
          key={value}
          variant="filled"
          severity={alertValues.severity}
          onClose={() => deleteAlert(value)}
          className={styles.Alert}
        >
          <AlertTitle className={styles.alertTitle}>
            {alertValues.title}
          </AlertTitle>
          <Typography className={styles.alertTypography}>{value}</Typography>
          <Button className={styles.alertButton} size="small">
            CLOSE
          </Button>
        </Alert>
      ))}
    </>
  );
};
