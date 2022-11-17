import React from "react";
import { Logo } from "../Header/views";
import {
  footerTitles1,
  footerTitles2,
  footerTitles3,
  footerTitles4,
  images,
} from "./data";
import { Column, LogoS, LogosBar, LogoW, Title, Wrapper } from "./views";

const Footer = () => {
  return (
    <Wrapper>
      <Logo src="images/Logo.svg" width={154} height={48} />
      <Column>
        {footerTitles1.map((el) => (
          <Title>{el}</Title>
        ))}
      </Column>
      <Column>
        {footerTitles2.map((el) => (
          <Title>{el}</Title>
        ))}
      </Column>
      <Column>
        {footerTitles3.map((el) => (
          <Title>{el}</Title>
        ))}
      </Column>
      <Column>
        <LogosBar>
          {images.map((el) => (
            <LogoW>
              <LogoS src={el} />
            </LogoW>
          ))}
        </LogosBar>
        {footerTitles4.map((el) => (
          <Title>{el}</Title>
        ))}
      </Column>
    </Wrapper>
  );
};
export default Footer;
