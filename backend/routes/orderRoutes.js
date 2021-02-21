import express from 'express';

const router = express.Router();

import {
  getOrderById,
  addOrderItems,
  updateOrderToPaid,
  getMyOrders
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById)
router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router

