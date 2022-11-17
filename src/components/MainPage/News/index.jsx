import React from "react";
import {
  Button,
  CardItem,
  Image,
  ImageS,
  LWrapper,
  Name,
  RWrapper,
  SButton,
  SCardItem,
  SName,
  SText,
  Text,
  TextWrapper,
  Title,
  Wrapper,
} from "./views";

const LCard = () => {
  return (
    <CardItem>
      <Image src="images/News_Car.jpg" />
      <Name>Сколько служит батарея Tesla Model 3</Name>
      <Text>
        Итак, представим: утро понедельника, ваша Тесла всю ночь стояла на
        зарядке. Вы открываете приложение, в нём высвечивается надпись Waking
        Up...и дальше ниче...
      </Text>
      <Button>
        Подробнее{" "}
        <img
          src="images/Arrow_Details.svg"
          alt="sd"
          style={{ "margin-left": "17px", "margin-top": "6px" }}
        />
      </Button>
    </CardItem>
  );
};
const SCard = () => {
  return (
    <SCardItem>
      <ImageS src="images/News_Car2.jpg" />
      <TextWrapper>
        <SName>Что делать, если не просыпается Тесла</SName>
        <SText>Итак, представим: утро понедельника, ва...</SText>
        <SButton>
          Подробнее{" "}
          <img
            src="images/Arrow_Details.svg"
            alt="sd"
            style={{ "margin-left": "17px", "margin-top": "6px" }}
          />
        </SButton>
      </TextWrapper>
    </SCardItem>
  );
};

const News = () => {
  return (
    <>
      <Title>Новини та статті</Title>
      <Wrapper>
        <LWrapper>
          <LCard />
          <LCard />
        </LWrapper>
        <RWrapper>
          <SCard />
          <SCard />
          <SCard />
        </RWrapper>
      </Wrapper>
    </>
  );
};
export default News;
