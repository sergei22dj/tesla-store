import React from "react";
import { cardData } from "../../../mock/cardData";
import CardItem from "../CardItem";
import { Button, Header, Name, Point, Title, TitleBar, Wrapper } from "./views";

const Catalog = () => {
  console.log(cardData);
  return (
    <>
      <Header>
        <Name>Каталог авто</Name>
        <TitleBar>
          <Title>Tesla в наявності</Title>
          <Point />
          <Title>Tesla у дорозі</Title>
          <Point />
          <Title>Нова Tesla</Title>
          <Point />
          <Title>Усі електромобілі</Title>
        </TitleBar>
      </Header>
      <Wrapper>
        {cardData.map((el) => (
          <CardItem data={el} />
        ))}
      </Wrapper>
      <Button>Перейти в каталог</Button>
    </>
  );
};
export default Catalog;
