import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';
import styled from '@emotion/styled';
import { tableCellClasses } from '@mui/material';
import { InsertDriveFile as InsertDriveFileIcon } from '@mui/icons-material';
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const CustomizedTable = ({ amount }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">File size</StyledTableCell>
            <StyledTableCell align="right">Added</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {amount.map((file) => (
            <StyledTableRow key={file.id}>
              <StyledTableCell>
                <InsertDriveFileIcon />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {file.name}
              </StyledTableCell>
              <StyledTableCell align="right">{file.file_size}</StyledTableCell>
              <StyledTableCell align="right">{file.created_at}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
