import { login, logout, register, sendFile } from '../Http/Controllers/user.js';
import { Router } from 'express';
import {
  registerValidate,
  loginValidate,
  validate,
} from '../../lib/validate/user.js';

export const router = Router();

router.post('/api/login', loginValidate, validate, login);
router.post('/api/registration', registerValidate, validate, register);

router.get('/logout', logout);

router.get('*', sendFile);

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *         format: hash
 *       confirm_user:
 *         type: string
 *         format: hash
 *       created_at:
 *         type: timestamp
 *       updated_at:
 *         type: timestamp
 *       is_active:
 *         type: integer
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags:
 *       - Users
 *     name: Login
 *     summary: Login
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *               format: password
 *         required:
 *           - username
 *           - password
 *     responses:
 *       '200':
 *         description: Success login
 *       '404':
 *         description: Bad username, not found in db, wrong password
 */

/**
 * @swagger
 * /api/registration:
 *   post:
 *     tags:
 *       - Users
 *     name: Register
 *     summary: Register
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *               format: password
 *             passwordConfirm:
 *               type: string
 *               format: password
 *             is_active:
 *               type: integer
 *             confirm_user:
 *               type: string
 *         required:
 *           - name
 *           - email
 *           - password
 *           - passwordConfirm
 *           - is_active
 *     responses:
 *       '200':
 *         description: Success registration
 *       '404':
 *         description: User already registered, validation false
 */
