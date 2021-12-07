import React, { useEffect, useState } from 'react';
import {
  getAllUserFiles,
  getAllUserFolders,
  openFolder,
} from '../../../actions/files.js';
import { CustomizedTable } from '../../CustomizedTable';

const Home = () => {
  const [files, setFiles] = useState([]);
  const [folders, setFolder] = useState([]);

  useEffect(async () => {
    await getAllUserFiles(setFiles);
    await getAllUserFolders(setFolder);
  }, []);

  const Folders = ({ stations }) => (
    <div>
      {stations.map((station) => (
        <button
          key={station.id}
          onClick={() => openFolder(setFolder, setFiles, station.id)}
        >
          {station.name}
        </button>
      ))}
    </div>
  );

  return (
    <div>
      <Folders stations={folders} />
      <CustomizedTable stations={files} />
    </div>
  );
};

export default Home;
