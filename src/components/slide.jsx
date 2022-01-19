import React from "react";
import styled from "styled-components";

function Slide({ id, current, img_url, title, content }) {
  return (
    <SlideContainer>
      <div className={id - 1 === current ? "active" : "inactive"}>
        <img src={img_url} />
        {id - 1 === current ? (
          <InfoBox>
            <h2>{title}</h2>
            <h3>{content}</h3>
            <hr />
            <div className="infoFooter">
              <p>바로가기</p>
            </div>
          </InfoBox>
        ) : (
          <div></div>
        )}
      </div>
    </SlideContainer>
  );
}

export default Slide;

const SlideContainer = styled.div`
  position: relative;
  height: 183px;
  width: 1089px;
  height: 281px;
  flex-shrink: 0;
  overflow-y: hidden;

  .inactive {
    filter: brightness(50%);
  }

  .active {
    filter: brightness(100%);
  }

  @media (min-width: 1200px) {
    width: 1060px;
    height: 300px;
    margin: 0 12px;
    flex-shrink: 0;
  }
`;

const InfoBox = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #fff;
  width: 100%;

  @media (min-width: 1200px) {
    position: absolute;
    left: 34px;
    bottom: 38px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    padding-top: 20px;
  }

  h2 {
    margin: 0 20px;
    font-size: 20px;
    line-height: 1.5;
  }

  h3 {
    margin: 0 20px;
    height: 44px;
    font-size: 14px;
    line-height: 1.64;
    color: #333;
  }

  hr {
    height: 0;
    background-color: #ececec;
    border: none;

    @media (min-width: 1200px) {
      height: 1px;
    }
  }

  .infoFooter {
    display: flex;
    padding-top: 12px;
  }

  p {
    margin: 0 20px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    color: #3366ff;
  }
`;
