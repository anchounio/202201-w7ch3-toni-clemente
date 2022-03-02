import { getPlatforms } from '../controllers/platform.controllers.js';
import { insertPlatform } from '../controllers/platform.controllers.js';
//import { deletetPlatform } from '../controllers/platform.controllers.js';
import express from 'express';
//import bcrypt from 'bcryptjs';
const router = express.Router();

router.get('/', getPlatforms);
router.post('/', insertPlatform);
//router.delete('/', deletePlatform);

export default router;
