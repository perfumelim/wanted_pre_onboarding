import React from "react";
import styled from "styled-components";

const MenuIcon = "images/icon-menu.png";

export default function navbar() {
  return (
    <NavContainer>
      <img src={MenuIcon} />
      {/* <i className="icon-logo_new" /> */}
      <ul>
        <li>채용</li>
        <li>이벤트</li>
        <li>직군별 연봉</li>
        <li>이력서 </li>
        <li>
          커뮤니티
          {/* <MenuIcon /> */}
        </li>
        <li>프리랜서</li>
        <li>AI 합격예측</li>
      </ul>
      <AsideContainer>
        <button>회원가입 / 로그인</button>
        <DashboardButton>기업 서비스</DashboardButton>
      </AsideContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);

  image {
    width: 3vw;
  }

  ul {
    display: flex;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;

    li {
      padding: 15px;
    }
  }
`;

const AsideContainer = styled.div`
  padding: 10px 0;

  button {
    padding: 0 3px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
}
  }
  `;

const DashboardButton = styled.button`
  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  font-weight: 400;
`;
