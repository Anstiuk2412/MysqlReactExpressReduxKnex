import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
import { openFolder } from '../../../actions/files.js';
import { CustomizedTable } from '../../CustomizedTable';
import { Folder } from '../../Folder';
import { useParams } from 'react-router-dom';

const Home = () => {
  const [files, setFiles] = useState([]);
  const [folders, setFolder] = useState([]);
  let folderId = useParams();

  useEffect(async () => {
    const foldersAndFiles = await openFolder(folderId.id);
    setFolder(foldersAndFiles.folders);
    setFiles(foldersAndFiles.files);
  }, [folderId]);

  return (
    <div>
      <div className={styles.leftSideBOX}></div>
      <div className={styles.middleSideBox}>
        <div className={styles.foldersBox}>
          <Folder amount={folders} />
        </div>
        <CustomizedTable amount={files} />
      </div>
      <div className={styles.rightSideBox}></div>
    </div>
  );
};

export default Home;
