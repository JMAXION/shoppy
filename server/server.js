import express from "express";
import cors from "cors";
import homeRouter from "./router/homeRouter.js";
import productRouter from "./router/productRouter.js";
import cartsRouter from "./router/cartsRouter.js";
import memberRouter from "./router/memberRouter.js";

const server = express();
const port = 8080;

/* 공통적인 요청 */
server.use(express.json()); //json 쓸 거임
server.use(express.urlencoded()); //utf-8 써서 한글 쓸 거임
server.use(cors()); //cors 쓸 거임

server.use("/", homeRouter);
server.use("/product", productRouter);
server.use("/carts", cartsRouter);
server.use("/member", memberRouter);

server.listen(port, () => {
  console.log(`server start -->${port}`);
});
