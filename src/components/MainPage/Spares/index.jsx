import React from "react";
// views
import {
  Button,
  CardWrapper,
  Image,
  Image1,
  Image2,
  Name,
  RightWrapper,
  RName,
  SImage1,
  SImage2,
  Wrapper,
} from "./views";

const Spares = () => {
  return (
    <>
      <Wrapper>
        <CardWrapper>
          <Name>Запчастини</Name>
          <Button>Перейти в каталог</Button>
          <Image1 src="images/sss.svg" />
          <Image2 src="images/Akb.svg" />
        </CardWrapper>
        <RightWrapper>
          <CardWrapper>
            <RName>Аксесуари</RName>
            <Button>Перейти в каталог</Button>
            <SImage1 src="images/Wheel2.svg" />
            <SImage2 src="images/Tubus.svg" />
          </CardWrapper>

          <CardWrapper>
            <RName>Мерч</RName>
            <Button>Перейти в каталог</Button>
            <SImage1 src="images/Sweeter.svg" />
            <SImage2 src="images/Hat.svg" width={118} height={145} />
          </CardWrapper>
        </RightWrapper>
      </Wrapper>
    </>
  );
};
export default Spares;
