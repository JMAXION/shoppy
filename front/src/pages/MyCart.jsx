import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MyCart({ cartItems, removeCartItem }) {
  const [cartList, setCartList] = useState([]); //cartItems + product.json

  useEffect(() => {
    const url = "http://127.0.0.1:8080/carts";
    /* axios
      .post(url, { name: "홍길동", age: "20" }) */
    axios({
      method: "post",
      url: url,
      data: { items: cartItems },
    })
      .then((res) => setCartList(res.data))
      .catch((error) => console.log(error));
  }, []);

  /*useEffect(() => {
    axios
      .get("/data/product.json")
      .then((res) => {
        const products = res.data;
        const updateCartItems = cartItems.map((item, index) => {
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
        setCartList(updateCartItems);
      })
      .catch((error) => console.log(error));
  }, [cartItems]); */

  console.log("Mycart : cartItems -->", cartItems);

  /* const removeCartItem = (cid, qty) => {
    alert("정말로 삭제하시겠습니까??");
    const removeIndex = cartList.findIndex((item) => item.cid === cid);
    const updateCartList = cartList.filter((item, i) => i !== removeIndex);
    setCartList(updateCartList);
    removeCartCount(qty);
  }; */

  return (
    <div className="content">
      <h1>MyCart</h1>
      <table border="1px solid green">
        <tr>
          <th>카트아이디</th>
          <th>상품아이디</th>
          <th>이미지</th>
          <th>상품명</th>
          <th>상품정보</th>
          <th>사이즈</th>
          <th>가격</th>
          <th>수량</th>
          <th>선택</th>
        </tr>
        {cartList.map((item) => (
          <tr>
            <td>{item.cid}</td>
            <td>{item.id}</td>
            <td>
              <img src={item.image} style={{ width: "150px" }} />
            </td>
            <td>{item.name}</td>
            <td>{item.info}</td>
            <td>{item.size}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>
              <button
                type="button"
                onClick={() => removeCartItem(item.cid, item.qty)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
