import express from 'express';
import { router as routerFromAsArray } from "./AsArray/routes.js";

const router = express.Router();
router.use('/AsArray', routerFromAsArray);

export { router };