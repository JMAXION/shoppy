import * as repository from "../repository/cartsRepository.js";

export const getCarts = async (req, res) => {
  const { items } = req.body;
  const cartList = await repository.getCarts(items);
  res.json(cartList);
  res.end();
};
