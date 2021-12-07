import { Router } from 'express';
import passport from 'passport';
import { allFolders, foldersAtFolder } from '../Http/Controllers/folders.js';
import { allFiles, filesAtFolder } from '../Http/Controllers/files.js';

export const router = Router();
/*All user files*/
router.get(
  '/api/files',
  passport.authenticate('jwt', {
    session: false,
  }),
  allFiles,
);

/*All user folders*/
router.get(
  '/api/folders',
  passport.authenticate('jwt', {
    session: false,
  }),
  allFolders,
);

/*All folders at folder*/
router.get(
  '/api/folder/folder/:id',
  passport.authenticate('jwt', {
    session: false,
  }),
  foldersAtFolder,
);

/*All files at folder*/
router.get(
  '/api/folder/file/:id',
  passport.authenticate('jwt', {
    session: false,
  }),
  filesAtFolder,
);
