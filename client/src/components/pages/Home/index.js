import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
import {
  getAllUserFilesAndFolders,
  openFolder,
} from '../../../actions/files.js';
import { CustomizedTable } from '../../CustomizedTable';
import { Folder } from '../../Folder';
import { useParams } from 'react-router-dom';

const Home = () => {
  const [files, setFiles] = useState([]);
  const [folders, setFolder] = useState([]);
  let folderId = useParams();
  useEffect(async () => {
    if (folderId.id) {
      await openFolder(setFolder, setFiles, folderId.id);
    } else {
      await getAllUserFilesAndFolders(setFolder, setFiles);
    }
  }, [folderId]);

  return (
    <div>
      <div className={styles.leftSideBOX}></div>
      <div className={styles.middleSideBox}>
        <div className={styles.foldersBox}>
          <Folder stations={folders} sendFunction={{ setFolder, setFiles }} />
        </div>
        <CustomizedTable stations={files} />
      </div>
      <div className={styles.rightSideBox}></div>
    </div>
  );
};

export default Home;
