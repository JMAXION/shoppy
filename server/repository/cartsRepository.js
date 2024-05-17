import { promises as fsPromises } from "fs";
/* 장바구니 리스트 */
export const getCarts = (items) => {
  const path = "data/product.json";
  const cartList = fsPromises
    .readFile(path, "utf-8")
    .then((data) => {
      const products = JSON.parse(data);
      const updateCartItems = items.map((item, index) => {
        const product = products.find((product) => product.id === item.id);
        if (product) {
          return {
            ...item,
            image: product.image,
            name: product.name,
            price: product.price,
            info: product.info,
          };
        }
        return item;
      });
      return updateCartItems;
    })
    .catch((error) => console.log(error));

  return cartList;
};
