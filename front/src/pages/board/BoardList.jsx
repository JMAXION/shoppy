import React from "react";
import { Link } from "react-router-dom";

export default function BoardList() {
  return (
    <div className="content">
      <h1>게시판</h1>
      <table border="1">
        <tr>
          <td colSpan={4}>
            <Link to="/board/new">
              <button type="button">글쓰기</button>
            </Link>
          </td>
        </tr>
        <tr>
          <th>번호</th>
          <th>내용</th>
          <th>조회수</th>
          <th>등록일자</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <Link to="/board/123">게시글 등록 테스트</Link>
          </td>
          <td>100</td>
          <td>2024/05/01</td>
        </tr>
        <tr>
          <td>2</td>
          <td>게시글 등록 테스트</td>
          <td>100</td>
          <td>2024/05/01</td>
        </tr>
        <tr>
          <td>3</td>
          <td>게시글 등록 테스트</td>
          <td>100</td>
          <td>2024/05/01</td>
        </tr>
        <tr>
          <td>4</td>
          <td>게시글 등록 테스트</td>
          <td>100</td>
          <td>2024/05/01</td>
        </tr>
        <tr>
          <td>5</td>
          <td>게시글 등록 테스트</td>
          <td>100</td>
          <td>2024/05/01</td>
        </tr>
      </table>
    </div>
  );
}
