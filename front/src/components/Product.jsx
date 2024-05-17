import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductAvatar from "./ProductAvatar";
import axios from "axios";

/* Axios는 문자열을 반환하지 않는다. 직접 반환한다. */

export default function Product() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/product/all")
      .then((res) => setProductList(res.data))
      .catch((error) => console.log(error));
    /* fetch("/data/product.json") //1.url 접속
      .then((res) => res.json()) //2. 문자열 데이터 반환 -> json 데이터 변환
      .then((result) => setProductList(result)) //3. json 데이터 변환
      .catch((error) => console.log(error)); */
  }, []);

  const rows = [];
  for (let i = 0; i < productList.length; i += 4) {
    rows.push(productList.slice(i, i + 4));
  }

  return (
    <div>
      {rows.map((rowArray, index) => (
        <div key={index} className="product-list">
          {rowArray.map((product) => (
            <Link to={`/products/${product.id}`}>
              <ProductAvatar image={product.image} />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
