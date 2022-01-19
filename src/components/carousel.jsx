import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import data from "../data/carouselData.json";
import LeftBtn from "../styles/leftBtn";
import RightBtn from "../styles/rightBtn";
import Slide from "./slide";

const SlideData = data.carousel_data;

function Carousel() {
  const maxIndex = SlideData.length - 1;
  const slideList = useRef();
  const [current, setCurrent] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const prevClick = () => {
    if (!isScrolling) {
      setCurrent((old) => old - 1);
    }
  };

  const nextClick = () => {
    if (!isScrolling) {
      setCurrent((old) => old + 1);
    }
  };

  useEffect(() => {
    const currentBanner = slideList.current.children[current + 1];
    currentBanner.scrollIntoView({ behavior: "smooth", inline: "center" });

    setIsScrolling(true);
    setTimeout(() => {
      setIsScrolling(false);
      if (current > maxIndex) {
        setCurrent(0);
        const firstBanner = slideList.current.children[1];
        firstBanner.scrollIntoView({ behavior: "auto", inline: "center" });
      } else if (current < 0) {
        setCurrent(maxIndex);
        const lastBanner = slideList.current.children[maxIndex];
        lastBanner.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }, 200);
  }, [current, setCurrent]);

  return (
    <CarouselContainer>
      <BannerList ref={slideList}>
        <Slide {...SlideData[maxIndex]} />
        {data &&
          SlideData.map((data) => {
            return <Slide current={current} key={data.id} {...data} />;
          })}
        <Slide {...SlideData[0]} />
      </BannerList>
      <SlideBtn className="prevBtn" onClick={prevClick}>
        <LeftBtn />
      </SlideBtn>
      <SlideBtn className="nextBtn" onClick={nextClick}>
        <RightBtn />
      </SlideBtn>
    </CarouselContainer>
  );
}

export default Carousel;

const CarouselContainer = styled.div`
  position: relative;

  .prevBtn {
    left: 7vw;
  }
  .nextBtn {
    right: 7vw;
  }
`;

const BannerList = styled.ul`
  display: flex;
  overflow-x: scroll;
  padding: 25px 0;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const SlideBtn = styled.button`
  position: absolute;
  top: 120px;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
`;
