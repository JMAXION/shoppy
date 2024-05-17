import * as repository from "../repository/homeRepository.js";

export const getHome = async (req, res) => {
  //product.json 읽어와야 됨. --> homeRepository가 담당한다.
  const products = await repository.getHome();
  res.json(products);
  res.end();
};
