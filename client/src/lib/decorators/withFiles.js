import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { openFolder } from '../../actions/files.js';

export default (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const [filesAndFoldersInfo, setFilesAndFoldersInfo] = useState({
      files: [],
      subFolders: [],
      folderParentId: null,
    });
    const [redirect, setRedirect] = useState(false);

    let folderId = useParams();
    //* Button to previous folder
    const history = useHistory();
    const previousFolder = async () => {
      if (!filesAndFoldersInfo.folderParentId) {
        history.push('/');
      } else {
        history.push(`${filesAndFoldersInfo.folderParentId}`);
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
      setFilesAndFoldersInfo(foldersAndFiles.data.filesAndFolders);
    }, [folderId]);

    if (redirect === true) {
      return <Redirect exact to={'/signIn'} />;
    }
    return <Component {...{ props, previousFolder, filesAndFoldersInfo }} />;
  };
};
