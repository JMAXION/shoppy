import React from "react";
import { useNavigate } from "react-router-dom";

export default function BoardContent() {
  const navigate = useNavigate();
  const handleNavigate = (type) => {
    /* if (type === "list") navigate(`/board`);
    else navigate(`/board/${type}`); */
    type === "list" ? navigate(`/board`) : navigate(`/board/${type}`);
  };

  return (
    <div className="content">
      <h1>게시판 상세정보</h1>
      <table border="1">
        <tr>
          <th>번호</th>
          <td>1</td>
          <th>조회수</th>
          <td>100</td>
          <th>등록일자</th>
          <td>2024/05/01</td>
        </tr>
        <tr>
          <th>제목</th>
          <td colSpan={5}>게시글 등록 테스트</td>
        </tr>
        <tr>
          <th>내용</th>
          <td colSpan={5}>
            게시글 등록 테스트 내용입니다.
            <br />
            <br />
            <br />
          </td>
        </tr>
        <tr>
          <td colSpan={6}>
            <button type="button" onClick={() => handleNavigate("update")}>
              수정하기
            </button>
            <button type="button" onClick={() => handleNavigate("delete")}>
              삭제하기
            </button>
            <button type="button" onClick={() => handleNavigate("list")}>
              리스트
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
