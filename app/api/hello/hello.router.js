import express from 'express';
import controller from './hello.controller.js';

let router = express.Router();

router.get('/', controller.sayHello);

export default router;