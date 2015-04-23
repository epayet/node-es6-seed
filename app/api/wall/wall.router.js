import express from 'express';
import controller from './wall.controller.js';

let router = express.Router();

router.get('/', controller.getWall);

export default router;