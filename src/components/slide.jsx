import React from "react";
import data from "../data/carouselData.json";

const carouselData = data.map(() => {
  return (
    <Slide key={data.id}>
      <img src={img_url} />
      <h3>{title}</h3>
      <p>{content}</p>
    </Slide>
  );
});
