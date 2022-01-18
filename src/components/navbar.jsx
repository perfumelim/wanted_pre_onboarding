import React from "react";
import styled from "styled-components";
import SearchIcon from "../styles/SearchIcon";
import AlarmIcon from "../styles/AlarmIcon";
import Badge from "../styles/Badge";

const MenuIcon = "images/icon-menu.png";
const Avatar = "images/avatar.jpeg";
const Logo = "images/logo.png";

export default function navbar() {
  return (
    <NavContainer>
      <NavWrapper>
        <IconBar>
          <img src={MenuIcon} className="hamburger" />
          <img src={Logo} className="logo" />
        </IconBar>
        <ul class="menuList">
          <li>채용</li>
          <li>이벤트</li>
          <li>직군별 연봉</li>
          <li>이력서 </li>
          <li data-badge="New">커뮤니티</li>
          <li>프리랜서</li>
          <li data-badge="Beta">AI 합격예측</li>
        </ul>
        <AsideContainer>
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <AlarmIcon />
            </li>
            <li>
              <AvatarImg>
                <div></div>
              </AvatarImg>
            </li>
            <li>
              <BusinessWrapper>
                <button>기업 서비스</button>
              </BusinessWrapper>
            </li>
          </ul>
        </AsideContainer>
      </NavWrapper>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100vw;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);

  image {
    width: 3vw;
  }

  .menuList {
    display: flex;
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

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1060px;
  margin: 0 auto;
`;

const IconBar = styled.div`
  display: flex;
  align-items: center;

  .hamburger {
    width: 17px;
    height: 14px;
    margin-top: -2px;
    margin-right: 15px;
  }

  .logo {
    height: 17px;
    padding-bottom: 5px;
  }
`;

const AsideContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  // width: 200px;

  ul {
    display: flex;
    align-items: center;

    li {
      padding: 0 5px;
    }
  }
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

const AvatarImg = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #e1e2e3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-image: url("images/avatar.jpeg");
    background-size: contain;
  }
`;
