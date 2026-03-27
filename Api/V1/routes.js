import express from 'express';
import { router as routerFromLedgers } from "./Ledgers/routes.js";

const router = express.Router();
router.use('/Ledgers', routerFromLedgers);

export { router };