import express from 'express';
import { router as routerFromLedgers } from "./Ledgers/routes.js";
import { router as routerFromStockItems } from "./StockItems/endpoints.js";

const router = express.Router();
router.use('/Ledgers', routerFromLedgers);
router.use('/StockItems', routerFromStockItems);

export { router };