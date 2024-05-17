import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BoardUpdate() {
  const [boardFormData, setBoardFormData] = useState({
    btitle: "게시글 등록 테스트",
    bcontent: "게시글 등록 테스트 내용입니다",
  });
  /* 수정완료 */
  const url = "http://127.0.0.1:8080/board/update/123";
  const handleUpdateSubmit = () => {
    axios({
      method: "post",
      url: url,
      data: boardFormData,
    })
      .then()
      .catch((error) => console.log(error));
  };
  /* 수정폼 리셋 */
  const handleUpdateReset = () => {
    setBoardFormData({
      btitle: "게시글 등록 테스트",
      bcontent: "게시글 등록 테스트 내용입니다",
    });
  };
  /* 이전페이지, 리스트 이동 */
  const navigate = useNavigate();
  const handleNavigate = (type) => {
    type === "list" ? navigate("/board") : navigate("/board/123");
  };
  /* 폼데이터 입력 */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoardFormData({
      ...boardFormData,
      [name]: value,
    });
  };
  return (
    <div>
      <h1>게시판 수정</h1>
      <table border="1">
        <tr>
          <th>제목</th>
          <td>
            <input
              type="text"
              name="btitle"
              value={boardFormData.btitle}
              onChange={handleChange}
            />
          </td>
        </tr>
        <tr>
          <th>내용</th>
          <td>
            <textarea
              name="bcontent"
              onChange={handleChange}
              value={boardFormData.bcontent}
            ></textarea>
          </td>
        </tr>
        {
          <tr>
            <td colSpan={2}>
              <button type="button" onClick={handleUpdateSubmit}>
                수정완료
              </button>
              <button type="button" onClick={handleUpdateReset}>
                다시쓰기
              </button>
              <button type="button" onClick={() => handleNavigate("pre")}>
                이전페이지
              </button>
              <button type="button" onClick={() => handleNavigate("list")}>
                리스트
              </button>
            </td>
          </tr>
        }
      </table>
    </div>
  );
}
