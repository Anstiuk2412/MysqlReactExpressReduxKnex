import React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Logout as LogoutIcon } from '@mui/icons-material';
import styles from './index.module.css';
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Anastiuk Drive
          </Typography>
          {window.location.pathname !== '/signIn' &&
          window.location.pathname !== '/signUp' ? (
            <IconButton aria-label="delete">
              <LogoutIcon className={styles.LogoutIcon} />
            </IconButton>
          ) : null}
          <Avatar>H</Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
