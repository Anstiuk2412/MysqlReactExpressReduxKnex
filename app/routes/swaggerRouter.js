import { Router } from 'express';
import { swaggerSpec } from '../../lib/swagger/index.js';

export const router = Router();

router.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
