import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { openFolder } from '../../actions/files.js';

export default (Component) => {
  // eslint-disable-next-line react/display-name
  return ({ ...props }) => {
    const [filesAndFoldersInfo, setFilesAndFoldersInfo] = useState({
      files: [],
      subFolders: [],
      folderParentId: null,
    });
    const [redirect, setRedirect] = useState(false);

    let folderId = useParams();
    //* Button to previous folder

    useEffect(async () => {
      const folderData = await openFolder(folderId.id);
      if (folderData === 'Unauthorized') {
        setRedirect(true);
      }
      const { filesAndFolders } = folderData.data;
      setFilesAndFoldersInfo(filesAndFolders);
    }, [folderId]);

    return <Component {...{ props, redirect, filesAndFoldersInfo }} />;
  };
};
