import React from "react";
import styled from "styled-components";

const MenuIcon = "images/icon-menu.png";

export default function navbar() {
  return (
    <NavContainer>
      <IconBar>
        <Hamburger src={MenuIcon} />
        <i className="icon-logo_new" />
      </IconBar>
      <ul>
        <li>채용</li>
        <li>이벤트</li>
        <li>직군별 연봉</li>
        <li>이력서 </li>
        <li data-badge="New">커뮤니티</li>
        <li>프리랜서</li>
        <li data-badge="Beta">AI 합격예측</li>
      </ul>
      <AsideContainer>
        <LoginBtn>회원가입/로그인</LoginBtn>
        <BusinessWrapper>
          <button>기업 서비스</button>
        </BusinessWrapper>
      </AsideContainer>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);

  image {
    width: 3vw;
  }

  ul {
    display: flex;
    flex: 1 1;
    justify-content: space-evenly;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;

    li {
      padding: 15px;
    }

    [data-badge] {
      position: relative;
      &:after {
        position: absolute;
        right: -10px;
        top: 3px;
        min-width: 10px;
        min-height: 10px;
        padding: 5px;
        color: #3366ff;
        font-size: 9px;
        font-weight: 500;
        content: attr(data-badge);
      }
    }
  }
`;

const IconBar = styled.div`
  display: flex;
`;

const Hamburger = styled.img`
  width: 17px;
  height: 14px;
  margin-top: -2px;
  margin-right: 15px;
`;

const AsideContainer = styled.div`
  display: flex;
  padding: 10px 0;
`;

const LoginBtn = styled.button`
  padding: 0 3px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
  line-height: 1;
`;

const BusinessWrapper = styled.div`
  display: flex;

  button {
    font-size: 13px;
    color: #666;
    line-height: 30px;
    height: 30px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    padding: 0 10px;
    font-weight: 400;
  }

  &:before {
    display: block;
    content: "";
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }
`;
