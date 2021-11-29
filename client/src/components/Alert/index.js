import { Alert, AlertTitle, Button, Typography } from '@mui/material';
import * as styles from './index.module.css';

export const CustomAlert = (props) => {
  return (
    <Alert
      variant="filled"
      severity={props.severity}
      onClose={() => {}}
      className={styles.Alert}
    >
      <AlertTitle className={styles.alertTitle}>{props.title}</AlertTitle>
      <Typography className={styles.alertTypography}>
        {props.typography}
      </Typography>
      <Button className={styles.alertButton} size="small">
        CLOSE
      </Button>
    </Alert>
  );
};
