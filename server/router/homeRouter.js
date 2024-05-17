import express from "express";
import * as controller from "../controller/homeController.js";

const router = express.Router();

router.get("/", controller.getHome);

export default router;
