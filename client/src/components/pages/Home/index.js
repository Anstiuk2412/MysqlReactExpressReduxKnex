import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
import { openFolder, getPathToParentFolder } from '../../../actions/files.js';
import { CustomizedTable } from '../../CustomizedTable';
import { Folder } from '../../Folder';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { TextBold } from '../../TextBold';
import { ButtonLarge } from '../../ButtonLarge';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Share as ShareIcon } from '@mui/icons-material';
import { Upload as UploadIcon } from '@mui/icons-material';
import { CreateNewFolder as CreateNewFolderIcon } from '@mui/icons-material';
import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import { Checkbox, Typography } from '@material-ui/core';
import { FolderOpen as FolderOpenIcon } from '@mui/icons-material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

const Home = () => {
  const [files, setFiles] = useState([]);
  const [folders, setFolder] = useState([]);
  const [redirect, setRedirect] = useState(false);
  let folderId = useParams();
  //* Button to previous folder
  const history = useHistory();
  const previousFolder = async () => {
    if (!folderId.id) {
      history.push('/');
    } else {
      const { data } = await getPathToParentFolder(folderId.id);
      history.push(data.path);
    }
  };

  useEffect(async () => {
    const foldersAndFiles = await openFolder(folderId.id);
    if (foldersAndFiles === 'Unauthorized') {
      setRedirect(true);
    }
    if (foldersAndFiles.redirect) {
      setRedirect(foldersAndFiles.redirect);
    }
    setFolder(foldersAndFiles.data.folders);
    setFiles(foldersAndFiles.data.files);
  }, [folderId]);

  if (redirect === true) {
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
          >
            SHARE SELECTED
          </ButtonLarge>
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
          {folders.map((folder) => (
            <Folder key={folder.id} amount={folder} />
          ))}
        </div>
        <div className={styles.filesPenalHeader}>
          <UploadFileIcon
            className={styles.uploadFileIcon}
            sx={{ fontSize: 27 }}
          />
          <TextBold className={styles.textFilesPenalHeader}>FILES</TextBold>
          <Checkbox className={styles.checkboxFilesPenalHeader} />
          <Typography className={styles.textCheckboxFilesPenalHeader}>
            Shared Only
          </Typography>
        </div>
        <CustomizedTable amount={files} className={styles.customizedTable} />
      </div>
      <div className={styles.rightSideBox}>
        <TextBold className={styles.titleHeaderDetails}>DETAILS</TextBold>
      </div>
    </div>
  );
};

export default Home;
