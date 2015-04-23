import express from 'express';

import wallRouter from './api/wall/wall.router.js';

let router = new express.Router();

router.use('/wall', wallRouter);

export default router;