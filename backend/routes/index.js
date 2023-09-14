import express from 'express';
import inventoryRouter from "./inventory.route.js"
import authRouter from "./auth.route.js"
import { authMiddleware } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.use("/auth", authRouter)
router.use("/inventory", inventoryRouter)




export default router;