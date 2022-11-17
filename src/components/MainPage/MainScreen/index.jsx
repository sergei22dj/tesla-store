import React from "react";
import Header from "../Header";
import { characteristics } from "./data";
import {
  BTitle,
  Button,
  FooterBar,
  Icon,
  IconsBar,
  IconW,
  Info,
  InfoBar,
  Name,
  NameWbtn,
  Slider,
  STitle,
  TitleWrapper,
  Wrapper,
} from "./views";

const MainScreen = () => {
  return (
    <Wrapper>
      <Header />
      <Info>
        <NameWbtn>
          <Name>Model S</Name>
          <Button>Дізнатися ціну</Button>
        </NameWbtn>
        <InfoBar>
          {characteristics.map((el) => (
            <TitleWrapper>
              <BTitle>{el.Btitle}</BTitle>
              <STitle>{el.Stitle}</STitle>
            </TitleWrapper>
          ))}
        </InfoBar>
      </Info>
      <FooterBar>
        <IconsBar>
          <IconW>
            <Icon src="images/Viber_Logo.svg" />
          </IconW>
          <IconW>
            <Icon src="images/Fb_Logo.svg" />
          </IconW>
          <IconW>
            {" "}
            <Icon src="images/Tg_Logo.svg" />
          </IconW>
        </IconsBar>
        <Slider></Slider>
      </FooterBar>
    </Wrapper>
  );
};
export default MainScreen;
