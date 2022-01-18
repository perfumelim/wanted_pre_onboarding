import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import data from "../data/carouselData.json";

const maxIndex = data.carousel_data.length - 1;

function Carousel() {
  const bannerList = useRef();
  const [current, setCurrent] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  function onClick() {
    if (!isScrolling) {
      setCurrent((old) => old + 1);
    }
  }

  useEffect(() => {
    const currentBanner = bannerList.current.children[current + 1];
    currentBanner.scrollIntoView({ behavior: "smooth", inline: "center" });

    setIsScrolling(true);
    setTimeout(() => {
      setIsScrolling(false);
      if (current > maxIndex) {
        setCurrent(0);
        const firstBanner = bannerList.current.children[1];
        firstBanner.scrollIntoView({ behavior: "auto", inline: "center" });
      }
    }, 500);
  }, [current, setCurrent]);

  return (
    <div>
      <BannerList ref={bannerList}>
        {data &&
          data.carousel_data.map((data) => {
            return (
              <div key={data.id}>
                <img src={data.img_url} />
              </div>
            );
          })}
      </BannerList>
      <SlideBtn onClick={onClick}></SlideBtn>
      <SlideBtn onClick={onClick}></SlideBtn>
    </div>
  );
}

export default Carousel;

const BannerList = styled.ul`
  display: flex;
  overflow-x: scroll;
  padding: 3rem;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const SlideBtn = styled.button`
  background-color: #333;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 30px;
`;
