import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BoardDelete() {
  /* 삭제완료 */
  const url = "http://127.0.0.1:8080/board/delete";
  const handleDeleteSubmit = () => {
    axios({
      method: "post",
      url: url,
      data: { bid: "123" },
    })
      .then()
      .catch((error) => console.log(error));
  };

  /* 이전페이지, 리스트 이동 */
  const navigate = useNavigate();
  const handleNavigate = (type) => {
    type === "list" ? navigate("/board") : navigate("/board/123");
  };
  return (
    <div className="content">
      <h1>BoardDelete</h1>
      <div>
        <h3>정말로 삭제하시겠습니까?</h3>
        <img
          src="https://dispatch.cdnser.be/wp-content/uploads/2017/03/20170318204141_sesame-street-oscar-peel-and-stick-giantwall-decal-900x900.jpg"
          alt=""
        />
      </div>
      <div>
        <button type="button" onClick={handleDeleteSubmit}>
          삭제완료
        </button>
        <button type="button" onClick={() => handleNavigate("pre")}>
          이전페이지
        </button>
        <button type="button" onClick={() => handleNavigate("list")}>
          리스트
        </button>
      </div>
    </div>
  );
}
