import express from 'express';

import helloRouter from './api/hello/hello.router.js';

let router = new express.Router();

router.use('/hello', helloRouter);

export default router;