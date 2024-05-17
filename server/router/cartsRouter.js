import express from "express";
import * as controller from "../controller/cartsController.js";

const router = express.Router();

router.post("/", controller.getCarts);

export default router;
