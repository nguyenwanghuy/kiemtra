import express from "express";
import  inventoryCtrl  from "../controllers/InventoryController.js";



const router = express.Router();
router.get('/',inventoryCtrl.getAll);
router.get('/test',inventoryCtrl.getItemSm);

export default router;