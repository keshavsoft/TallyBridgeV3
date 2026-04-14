import express from 'express';
import { router as routerFromGetFromTally } from "./GetFromTally/endpoints.js";
import { postFilterDataFromBodyFunc } from "./Transform/controller.js";

const router = express.Router();
router.use('/GetFromTally', routerFromGetFromTally);
router.use('/Transform', postFilterDataFromBodyFunc);

export { router };