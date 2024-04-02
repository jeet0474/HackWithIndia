import express from 'express';
import cors from 'cors';
import * as controller from '../controller/agency.js';
import { authenticateAgencyToken } from '../config/authMiddleware.js'

const router = express.Router();

router.use(cors());

router.get('/', authenticateAgencyToken, controller.queue);
router.post('/confirm-supplies', authenticateAgencyToken, controller.cofirm_supplies);
router.get('/history', authenticateAgencyToken, controller.history);
router.post('/add-reward', authenticateAgencyToken, controller.add_reward);
router.get('/rewards', authenticateAgencyToken, controller.rewards);

export default router;