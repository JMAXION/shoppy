import { promises as fsPromises } from "fs";
export const getHome = () => {
  const path = "data/product.json";
  const products = fsPromises
    .readFile(path, "utf-8")
    .then(
      (data) => JSON.parse(data) //한 줄로 쓸 때는 return 생략 가능. 중괄호 안에 들어가게 되면 return 써야 됨.
      /* {
      const jsonData = JSON.parse(data);
      return jsonData;
    } */
    )
    .catch((error) => console.log(error));

  return products;
};
