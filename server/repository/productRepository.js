import { promises as fsPromises } from "fs";
/* 전체 상품 파일 읽어오기 */
export const getProducts = () => {
  const path = "data/product.json";
  const products = fsPromises
    .readFile(path, "utf-8")
    .then((data) => JSON.parse(data))
    .catch((error) => console.log(error));
  return products;
};
/* 개별 상품 파일 읽어오기 */
export const getProduct = (id) => {
  const path = "data/product.json";
  const product = fsPromises
    .readFile(path, "utf-8")
    .then((data) => {
      const jsonData = JSON.parse(data);
      const product = jsonData.filter((item) => item.id === id); //이 과정을 거치지 않으면 그냥 새로운 배열로  return 된다. [{id:1}]
      return product[0];
    })
    .catch((error) => console.log(error));
  return product;
};
/* 상품 등록 */
export const insert = (productData) => {
  console.log("repository-->", productData);
  return { cnt: 1 };
};
