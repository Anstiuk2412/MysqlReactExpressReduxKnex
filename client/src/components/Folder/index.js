import { Button } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import styles from './index.module.css';
import { Folder as FolderIcon } from '@mui/icons-material';

const FolderButton = styled(Button)({
  position: 'relative',
  width: '302.37px',
  height: '141px',
  top: '51px',
  marginLeft: '32px',
  border: '3px solid #FA4616',
  boxSizing: 'border-box',
  borderRadius: '15px',
  '&:hover': {
    background: 'none',
    border: '3px solid #FA4616',
  },
});

export const Folder = (props) => {
  const history = useHistory();
  return (
    <FolderButton
      className={props.className}
      variant="outlined"
      onClick={() => {
        history.push(`/folder/${props.amount.id}`);
      }}
    >
      <FolderIcon className={styles.folderIcon} sx={{ fontSize: 47 }} />
      <Typography className={styles.folderName}>{props.amount.name}</Typography>
      <Box
        variant="caption"
        className={styles.countFilesInFolder}
        sx={{ fontWeight: 300 }}
      >
        34 FILES
      </Box>
    </FolderButton>
  );
};
