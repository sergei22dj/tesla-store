import React from "react";
import { HeaderTitles, phoneNumber } from "./data";
// views
import { Logo, MenuBtn, Phone, Title, TitleWrapper, Wrapper } from "./views";

const Header = () => {
  return (
    <Wrapper>
      <Phone src="images/Phone.svg" />
      <Logo src="images/Logo.svg" alt="img" />
      <TitleWrapper>
        {HeaderTitles.map((el) => (
          <Title>{el}</Title>
        ))}
      </TitleWrapper>
      <Title>{phoneNumber}</Title>
      <MenuBtn src="images/Menu_Btn.png" alt="asd" />
    </Wrapper>
  );
};
export default Header;
