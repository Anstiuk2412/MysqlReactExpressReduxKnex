import { Button } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const FolderButton = styled(Button)({
  width: '302.37px',
  height: '141px',
  top: '51px',
  left: '32px',
  border: '3px solid #FA4616',
  boxSizing: 'border-box',
  borderRadius: '15px',
});

export const Folder = (props) => {
  const navigate = useNavigate();
  return (
    <>
      {props.amount.map((folder) => (
        <FolderButton
          variant="outlined"
          key={folder.id}
          onClick={() => {
            navigate(`/folder/${folder.id}`);
          }}
        >
          {folder.name}
        </FolderButton>
      ))}
    </>
  );
};
