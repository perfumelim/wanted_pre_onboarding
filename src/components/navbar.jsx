import React from "react";
import styled from "styled-components";

export default function navbar() {
  return (
    <NavContainer>
      <ul>
        <li>채용</li>
        <li>이벤트</li>
        <li>직군별 연봉</li>
        <li>이력서</li>
        <li>커뮤니티</li>
        <li>프리랜서</li>
        <li>AI 합격예측</li>
      </ul>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100vw;
  height: 5vh;
  border-bottom: 1px solid #333333;
`;
