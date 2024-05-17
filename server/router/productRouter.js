import express from "express";
import * as controller from "../controller/productController.js";

const router = express.Router();

/* /all 모든 상품 검색 */
router.get("/all", controller.getProducts);

/* /detail 개별 상품 */
router.get("/:id", controller.getProduct);

/* /new 새로운 상품 */
router.post("/new", controller.insert);

export default router;
