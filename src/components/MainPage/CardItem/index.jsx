import React from "react";
import {
  Image,
  Info,
  InfoName,
  InfoValue,
  InfoWrapper,
  Name,
  PriceBar,
  PriceM,
  PriceS,
  Wrapper,
} from "./views";

const CardItem = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <Image src={data.img} />
      <Name>{data.name}</Name>
      <PriceBar>
        <PriceM>{data.priceU}</PriceM>
        <PriceS>{data.priceUA}</PriceS>
        <PriceS>{data.priceE}</PriceS>
      </PriceBar>
      <InfoWrapper>
        <Info>
          <InfoName>Запас ходу:</InfoName>
          <InfoValue>{data.reserve}</InfoValue>
        </Info>
        <Info>
          <InfoName>Місткість батареї:</InfoName>
          <InfoValue>{data.battery}</InfoValue>
        </Info>
        <Info>
          <InfoName>Пробіг:</InfoName>
          <InfoValue>{data.mileage}</InfoValue>
        </Info>
        <Info>
          <InfoName>Рік:</InfoName>
          <InfoValue>{data.year}</InfoValue>
        </Info>
      </InfoWrapper>
    </Wrapper>
  );
};
export default CardItem;
