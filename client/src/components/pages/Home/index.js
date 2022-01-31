import styles from './index.module.css';
import React, { useState } from 'react';
import { sharedFilesByEmail } from '../../../actions/files.js';
import { CustomizedTable } from '../../CustomizedTable';
import { Folder } from '../../Folder';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { TextBold } from '../../TextBold';
import { ButtonLarge } from '../../ButtonLarge';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Share as ShareIcon } from '@mui/icons-material';
import { Upload as UploadIcon } from '@mui/icons-material';
import { FolderShared as FolderSharedIcon } from '@mui/icons-material';
import { CreateNewFolder as CreateNewFolderIcon } from '@mui/icons-material';
import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import { Typography } from '@material-ui/core';
import { FolderOpen as FolderOpenIcon } from '@mui/icons-material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Box, Button, InputAdornment, Modal, TextField } from '@mui/material';
import { AccountCircle } from '@material-ui/icons';
import withFiles from '../../../lib/decorators/withFiles.js';
import { useSelector } from 'react-redux';
import { CustomAlert } from '../../Alert/index.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home = ({ redirect, filesAndFoldersInfo }) => {
  const [email, setEmail] = useState('');
  const [alerts, setAlerts] = useState([]);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  // * open form for send file by email
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filesId = useSelector((state) => state.files.files);
  const fileDetails = useSelector((state) => state.files.details);
  // * link for add file by link
  const pathFile = useSelector((state) => state.files.path);
  // * Share file by email
  const shareFileByEmail = async () => {
    // * Validate email and selected files
    const emailRegex = /\S+@\S+\.\S+/;
    if (filesId.length < 1) {
      return setAlerts([
        {
          message: 'Please select a file for share',
          severity: 'error',
          title: 'ERROR',
        },
      ]);
    }
    if (!emailRegex.test(email)) {
      return setAlerts([
        {
          message: 'Please enter a valid email',
          severity: 'error',
          title: 'ERROR',
        },
      ]);
    }
    const { data } = await sharedFilesByEmail(filesId, email);
    setAlerts(data.message);
  };

  const deleteAlert = (deletedAlertValue) => {
    const updatedAlerts = alerts.filter(
      (alert) => alert.message !== deletedAlertValue,
    );
    setAlerts(updatedAlerts);
  };

  const previousFolder = async () => {
    if (!filesAndFoldersInfo.folderParentId) {
      history.push('/');
    } else {
      history.push(`${filesAndFoldersInfo.folderParentId}`);
    }
  };
  if (redirect) {
    return <Redirect exact to={'/signIn'} />;
  }
  return (
    <div>
      <div className={styles.leftSideBOX}>
        <TextBold className={styles.textActionMenu}>ACTIONS MENU</TextBold>
        <div className={styles.actionMenu}>
          <ButtonLarge
            variant="outlined"
            className={`classic ${styles.buttonCreateFolder}`}
            startIcon={<CreateNewFolderIcon />}
          >
            CREATE FOLDER
          </ButtonLarge>
          <ButtonLarge
            variant="outlined"
            className={`classic ${styles.buttonAddFiles}`}
            startIcon={<UploadIcon />}
          >
            ADD FILES
          </ButtonLarge>
          <ButtonLarge
            variant="outlined"
            className={`dark ${styles.buttonShareSelected}`}
            startIcon={<ShareIcon />}
            onClick={handleOpen}
          >
            SHARE SELECTED
          </ButtonLarge>
          <Link to="/sharedFiles">
            <ButtonLarge
              variant="outlined"
              className={`dark ${styles.buttonAvailableFile}`}
              startIcon={<FolderSharedIcon />}
            >
              AVAILABLE TO ME
            </ButtonLarge>
          </Link>
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h2"
              >
                User mail
              </Typography>
              <TextField
                id="input-with-icon-textfield"
                label="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button variant="outlined" onClick={shareFileByEmail}>
                Shared
              </Button>
            </Box>
          </Modal>
          <ButtonLarge
            variant="outlined"
            className={`dark ${styles.buttonDeleteSelected}`}
            startIcon={<DeleteIcon />}
          >
            DELETE SELECTED
          </ButtonLarge>
          <ButtonLarge
            variant="outlined"
            className={`dark ${styles.buttonPreviousFolder}`}
            startIcon={<ArrowBackIcon />}
            onClick={previousFolder}
          >
            Open parent folder
          </ButtonLarge>
        </div>
        <TextBold className={styles.textYourSpace}>YOUR SPACE</TextBold>
        <div className={styles.spaceBox}>
          <div className={styles.rectangleMemoryValue} />
          <TextBold className={styles.userMemoryValue}>
            3.93 GB out of 5 GB
          </TextBold>
        </div>
      </div>
      <div className={styles.middleSideBox}>
        <div className={styles.foldersBox}>
          <FolderOpenIcon
            className={styles.iconFolderBox}
            sx={{ fontSize: 27 }}
          />
          <TextBold className={styles.textFolderBox}>NEW FOLDERS</TextBold>
          {filesAndFoldersInfo.subFolders.map((folder) => (
            <Folder key={folder.id} amount={folder} />
          ))}
        </div>
        <div className={styles.filesPenalHeader}>
          <UploadFileIcon
            className={styles.uploadFileIcon}
            sx={{ fontSize: 27 }}
          />
          <TextBold className={styles.textFilesPenalHeader}>FILES</TextBold>
        </div>
        <CustomizedTable
          amount={filesAndFoldersInfo.files}
          className={styles.customizedTable}
        />
      </div>
      <div className={styles.rightSideBox}>
        <TextBold className={styles.titleHeaderDetails}>DETAILS</TextBold>
      </div>
      {JSON.stringify(fileDetails) !== '{}' ? (
        <div className={styles.detailsBox}>
          <img
            className={styles.fileIcon}
            src="https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"
            alt="img"
          />
          <Box className={styles.descriptionFileName}>{fileDetails.name}</Box>
          <Box className={styles.descriptionFileWeight}>
            {fileDetails.file_size} MB
          </Box>
          <Box className={styles.descriptionFileTimeStamp}>Added: Updated:</Box>
          <Box className={styles.descriptionSharedWithText}>Shared with</Box>
          <Box className={styles.descriptionFileShareWhum}>
            Email of user shared
          </Box>
          <Box className={styles.descriptionSharedLinkText}>SHARED LINK</Box>
          <ButtonLarge
            className={styles.descriptionButtonLink}
            variant="outlined"
            onClick={() => {
              navigator.clipboard.writeText(pathFile);
            }}
            startIcon={<CreateNewFolderIcon />}
          >
            {pathFile}
          </ButtonLarge>
        </div>
      ) : null}
      {alerts !== [] ? (
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
      ) : null}
    </div>
  );
};

export default withFiles(Home);
