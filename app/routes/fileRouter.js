import { Router } from 'express';
import passport from 'passport';
import {
  addSharedFilesByLink,
  createLinkForShareFile,
  filesAndFoldersAtFolder,
  filesShare,
  getAvailableFiles,
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
// * share files by Email
router.post(
  '/api/filesShare',
  passport.authenticate('jwt', {
    session: false,
  }),
  filesShare,
);
// * get share files
router.get(
  '/api/availableFiles',
  passport.authenticate('jwt', {
    session: false,
  }),
  getAvailableFiles,
);
// * generate path for share file
router.post(
  '/api/generatePathShareFile',
  passport.authenticate('jwt', {
    session: false,
  }),
  createLinkForShareFile,
);
// * add share files by link
router.post(
  '/api/addSharedFilesByLink',
  passport.authenticate('jwt', {
    session: false,
  }),
  addSharedFilesByLink,
);
/**
 * @swagger
 * definitions:
 *   Files:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       user_id:
 *         type: integer
 *       name:
 *         type: string
 *       folder_id:
 *         type: integer
 *       file_size:
 *         type: float
 *       created_at:
 *         type: timestamp
 *       updated_at:
 *         type: timestamp
 */

/**
 * @swagger
 * definitions:
 *   Folder:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       user_id:
 *         type: int
 *       parent_id:
 *         type: integer
 *       created_at:
 *         type: timestamp
 *       updated_at:
 *         type: timestamp
 */

/**
 * @swagger
 * /api/files/{folder_id}:
 *   get:
 *     tags:
 *       - Files
 *     name: Get users files and folder
 *     summary: Get users files and folder
 *     security:
 *       - jwtAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in : path
 *         name: folder_id
 *         schema:
 *           type: integer
 *         required:
 *           - folder_id
 *     responses:
 *       '200':
 *         description: Users files and folders
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: object
 *               properties:
 *                 files:
 *                   type: object
 *                 folders:
 *                   type: object
 *                 message:
 *                   type: string
 */
