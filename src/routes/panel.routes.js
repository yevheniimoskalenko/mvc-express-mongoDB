import { Router } from 'express';
import middleware from '../middleware/verify.middleware.js';
import panel from '../controllers/panel.controller.js';
const router = Router();

router.get('/panel', middleware, panel);
export default router;
