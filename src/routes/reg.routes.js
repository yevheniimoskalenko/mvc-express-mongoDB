import { Router } from 'express';

import reg from '../controllers/reg.controller.js';
const router = Router();

router.post('reg', reg);

export default router;
