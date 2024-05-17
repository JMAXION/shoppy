import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BoardWrite() {
  const [boardFormData, setBoardFormData] = useState({
    btitle: "",
    bcontent: "",
  });
  /* 등록완료 */
  const url = "http://127.0.0.1:8080/board/new";
  const handleWriteSubmit = () => {
    axios({
      method: "post",
      url: url,
      data: boardFormData,
    })
      .then()
      .catch((error) => console.log(error));
  };
  /* 등록폼 리셋 */
  const handleWriteReset = () => {
    setBoardFormData({
      btitle: "",
      bcontent: "",
    });
  };
  /* 이전페이지, 리스트 이동 */
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/board");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoardFormData({
      ...boardFormData,
      [name]: value,
    });
  };
  return (
    <div className="content">
      BOARDWRITE
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
              <button type="button" onClick={handleWriteSubmit}>
                등록완료
              </button>
              <button type="button" onClick={handleWriteReset}>
                다시쓰기
              </button>
              <button type="button" onClick={handleNavigate}>
                리스트
              </button>
            </td>
          </tr>
        }
      </table>
    </div>
  );
}
