import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ userId: "", userPass: "" });
  const userIdRef = useRef(null);
  const userPassRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /* 로그인 버튼 클릭 - 서버연동 */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validationCheck()) {
      console.log(formData);
      //서버전송 GET : 패킷 (header) :url => axios.get() ==> /:id
      //서버전송 POST:패킷(body) => axios.post , axios({method, url 등})
      const url = "http://127.0.0.1:8080/member/login";
      axios({
        method: "POST",
        url: url,
        data: formData,
      })
        .then() //로그인 처리 결과를 받아온다.
        .catch((error) => console.log(error));
    }
  };

  const validationCheck = () => {
    let checkFlag = true;
    if (!formData.userId.trim()) {
      alert("아이디를 입력해 주세요.");
      userIdRef.current.focus();
      checkFlag = false;
    } else if (!formData.userPass.trim()) {
      alert("패스워드를 입력해 주세요.");
      userPassRef.current.focus();
      checkFlag = false;
    }
    return checkFlag;
  };

  return (
    <div className="content">
      <div className="login">
        <h3>HOPENEARUS LOGIN</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>아이디</label>
              <input
                type="text"
                name="userId"
                ref={userIdRef}
                value={formData.userId}
                onChange={handleChange}
              />
            </li>
            <li>
              <label>패스워드</label>
              <input
                type="text"
                name="userPass"
                ref={userPassRef}
                value={formData.userPass}
                onChange={handleChange}
              />
            </li>
            <li>
              <button type="submit">Login</button>
              <button type="button">Reset</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
