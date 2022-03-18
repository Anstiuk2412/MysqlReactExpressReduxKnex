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
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1 }}>
            Anastiuk Drive
          </Typography>
          {location.pathname !== '/signIn' &&
          location.pathname !== '/signUp' ? (
            <IconButton aria-label="delete" href="/logout">
              <LogoutIcon className={styles.LogoutIcon} />
            </IconButton>
          ) : null}
          <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
