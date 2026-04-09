import express from 'express';
import { router as routerFromToLog } from "./ToLog/routes.js";
import { router as routerFromToFile } from "./ToFile/routes.js";
import { router as routerFromTransform } from "./Transform/routes.js";
import { router as routerFromGetFromTally } from "./GetFromTally/endpoints.js";

const router = express.Router();

router.use('/ToLog', routerFromToLog);
router.use('/ToFile', routerFromToFile);
router.use('/Transform', routerFromTransform);
router.use('/GetFromTally', routerFromGetFromTally);

export { router };