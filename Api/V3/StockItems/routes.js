import express from 'express';
import { router as routerFromGetFromTally } from "./GetFromTally/endpoints.js";

const router = express.Router();
router.use('/GetFromTally', routerFromGetFromTally);

export { router };