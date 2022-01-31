import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { tableCellClasses } from '@mui/material';
import { InsertDriveFile as InsertDriveFileIcon } from '@mui/icons-material';
import { Checkbox } from '@material-ui/core';
import styles from './index.module.css';
import { useDispatch } from 'react-redux';
import {
  addFileForSharedByEmail,
  removeFileForSharedByEmail,
} from '../../store/fileSlice.js';
import { genaretePath } from '../../actions/files.js';
import { addFileDetails, addFileLink } from '../../store/fileSlice.js';

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#2A3234',
    borderBottom: 'none',
    color: '#FA4616',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    background: '#0E1112',
    border: 'none',
    color: '#FFF',
  },
}));
const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: '#FA4616',
    border: 'none',
  }, // eslint-disable-line
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: 'none',
    color: '#FFF',
  },
}));

export const CustomizedTable = (props) => {
  const dispatch = useDispatch();
  const getFileDetails = async (file) => {
    dispatch(addFileDetails(file));
    const { data } = await genaretePath(file.id);
    const path = data.path;
    dispatch(addFileLink(path));
  };
  return (
    <TableContainer
      component={Paper}
      className={props.className}
      sx={{ borderRadius: '0%' }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className={styles.tableHead}>
          <TableRow>
            <StyledTableCell className={styles.tableTitle}>
              Title
            </StyledTableCell>
            <StyledTableCell align="right" className={styles.tableFilesize}>
              File size
            </StyledTableCell>
            <StyledTableCell align="right" className={styles.tableAdded}>
              Added
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.amount.map((file) => (
            <StyledTableRow key={file.id} onClick={() => getFileDetails(file)}>
              <StyledTableCell>
                <Checkbox
                  className={styles.checkBox}
                  value={file.id}
                  onChange={(e) => {
                    e.target.checked
                      ? dispatch(addFileForSharedByEmail(file.id))
                      : dispatch(removeFileForSharedByEmail(file.id));
                  }}
                />
                <InsertDriveFileIcon className={styles.IconFile} />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {file.name}
              </StyledTableCell>
              <StyledTableCell align="right">{file.file_size}</StyledTableCell>
              <StyledTableCell align="right">{file.created_at}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter className={styles.tableFooter}>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={2}
              rowsPerPage={10}
              page={1}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
