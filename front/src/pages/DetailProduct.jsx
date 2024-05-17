import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailProduct({ addCartCount }) {
  /* url을 통해 넘어오는 parameter는 useparam이라고 하는 hook을 사용한다 */
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("XS");
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, []);
  /* useEffect(() => {
    fetch("/data/product.json")
      .then((res) => res.json())
      .then((result) => {
        result.filter((product) => {
          if (product.id === id) setProduct(product);
        });
      })
      .catch((error) => console.log(error));
  }, [id]); */

  /* 장바구니 기능 추가 */
  const addCartItem = (id) => {
    const cid = Math.floor(100 + Math.random() * 900);
    /* 장바구니 추가 아이템 생성 - {상품id, 사이즈, 수량} */
    addCartCount({ cid: cid, id: id, size: size, qty: 1 });
  };
  return (
    <div className="content">
      <div className="product-detail">
        <img src={product.image} />
        <ul>
          <li className="product-detail-title">{product.name}</li>
          <li className="product-detail-title">{product.price}</li>
          <li className="product-detail-subtitle">{product.info}</li>
          <li>
            <span className="product-detail-select-title">옵션: </span>
            <select
              className="product-detail-select"
              onChange={(e) => {
                setSize(e.target.value);
              }}
            >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </li>
          <li>
            <button
              type="button"
              className="product-detail-button"
              onClick={() => addCartItem(product.id)}
            >
              장바구니에 담기
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
