import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-image: url("images/TeslaS_Screen.jpg");
  background-size: cover;
  background-position: center;
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
`;
export const NameWbtn = styled.div``;
export const Name = styled.div`
  color: white;
  font-size: 12vw;
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
  padding: 0 100px;
  margin-bottom: 46px;
`;
export const IconsBar = styled.div`
  display: flex;
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
export const Slider = styled.div``;