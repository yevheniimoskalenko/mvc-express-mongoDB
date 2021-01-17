import { Router } from 'express';
import verify from '../controllers/verify.controller.js';
const router = Router();

router.use('/verefy', verify);

export default router;
