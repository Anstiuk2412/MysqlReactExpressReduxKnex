import { Router } from 'express';
import passport from 'passport';
import {
  filesAndFoldersAtFolder,
  getPathToParentFolder,
} from '../Http/Controllers/files.js';

export const router = Router();

/*All folders and file at folder*/
router.get(
  '/api/files/:folder_id',
  passport.authenticate('jwt', {
    session: false,
  }),
  filesAndFoldersAtFolder,
);

/*Button previous folder*/
router.get(
  '/api/getPathToParentFolder/:folder_id',
  passport.authenticate('jwt', {
    session: false,
  }),
  getPathToParentFolder,
);
