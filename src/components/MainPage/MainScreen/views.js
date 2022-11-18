import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-image: url("images/TeslaS_Screen.jpg");
  background-size: cover;
  background-position: right 65% bottom 45%;
  background-repeat: no-repeat;
  width: 100%;
  height: 960px;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  margin-bottom: 100px;
  @media screen and (max-width: 1195px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 600px;
    padding: 0 40px;
  }
  @media screen and (max-width: 320px) {
    padding: 0 10px;
  }
`;
export const NameWbtn = styled.div``;
export const Name = styled.div`
  color: white;
  font-size: 12vw;
  @media screen and (max-width: 600px) {
    font-size: 56px;
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #e2052d;
  height: 48px;
  width: 216px;
`;
export const InfoBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 220px;
  @media screen and (max-width: 1195px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    column-gap: 30px;
    margin-top: 300px;
    align-items: flex-start;
  }
  @media screen and (max-width: 965px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    column-gap: 10px;
    margin-top: 350px;
    align-items: flex-start;
  }
  @media screen and (max-width: 550px) {
    margin-top: 450px;
  }
`;
export const TitleWrapper = styled.div`
  text-align: end;
  margin-top: 70px;
  @media screen and (max-width: 1195px) {
    width: 130px;
  }
  @media screen and (max-width: 650px) {
    text-align: center;
  }
`;
export const BTitle = styled.div`
  color: white;
  font-size: 40px;
  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
`;
export const STitle = styled.div`
  color: white;
  font-size: 16px;
  max-width: 225px;
  @media screen and (max-width: 550px) {
    font-size: 12px;
  }
`;
export const FooterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 100px;
  margin-bottom: 46px;
  @media screen and (max-width: 550px) {
    padding: 0 40px;
  }
`;
export const IconsBar = styled.div`
  display: flex;
  column-gap: 20px;
`;
export const IconW = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: 1px solid white;
  cursor: pointer;
`;
export const Icon = styled.img``;
export const Slider = styled.div`
  display: flex;
  width: 352px;
  height: 176px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const ScrollWrapper = styled.div`
  width: 2px;
  background-color: #e2052d;
`;
export const Scroll = styled.div`
  width: 2px;
  background-color: white;
  height: 33%;
`;
export const Image = styled.div`
  width: 100%;
  background-image: url("images/Car_Slider.jpg");
  background-position: center;
`;
export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NavButton = styled.img``;
