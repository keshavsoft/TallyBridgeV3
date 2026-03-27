import express from 'express';
import { router as routerFromToLog } from "./ToLog/routes.js";

const router = express.Router();
router.use('/ToLog', routerFromToLog);

export { router };