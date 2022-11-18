import React from "react";
import styled from "styled-components";
import {
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
  let statusText;
  let BgColor;
  let TextColor;

  if (data.status == "a") {
    statusText = "В наявності";
    BgColor = `#E20531`;
    TextColor = `white`;
  }
  if (data.status == "b") {
    statusText = "Під замовлення";
    BgColor = "#272531";
    TextColor = `white`;
  }
  if (data.status == "c") {
    statusText = "Нова";
    BgColor = "#F9F9F9";
    TextColor = `#E20531`;
  }
  return (
    <Wrapper>
      <Image img={data.img}>
        <Status col={BgColor} tcol={TextColor}>
          {statusText}
        </Status>
      </Image>
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

const Image = styled.div`
  width: 486;
  height: 289px;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 450px) {
    height: 220px;
  }
  @media screen and (max-width: 320px) {
    height: 180px;
  }
`;
const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 37px;
  color: ${(props) => props.tcol};
  background-color: ${(props) => props.col};
`;
