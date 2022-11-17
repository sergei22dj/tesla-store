import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0 40px;
  column-gap: 32px;
  margin: 200px 0 150px;
  @media screen and (max-width: 770px) {
    flex-direction: column;
  }
`;
export const Name = styled.div`
  font-size: 36px;
  color: #272531;
  margin: 45px auto 45px 38px;
  text-align: left;
  position: relative;
  z-index: 100;
  @media screen and (max-width: 470px) {
    font-size: 24px;
    text-align: center;
    margin: 25px 0;
  }
`;
export const RName = styled.div`
  font-size: 36px;
  color: #272531;
  margin: 110px auto 45px 38px;
  text-align: left;
  position: relative;
  z-index: 100;
  @media screen and (max-width: 770px) {
    margin: 45px auto 45px 38px;
  }
  @media screen and (max-width: 470px) {
    font-size: 24px;
    text-align: center;
    margin: 25px 0;
  }
`;
export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #f9f9f9;
  @media screen and (max-width: 770px) {
    margin-bottom: 51px;
  }
  @media screen and (max-width: 470px) {
    height: 350px;
  }
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 216px;
  height: 48px;
  color: white;
  background-color: #e2052d;
  margin: 45px auto 45px 38px;
  position: relative;
  z-index: 100;
  @media screen and (max-width: 370px) {
    width: 130px;
    margin: 0 auto;
  }
`;
export const RightWrapper = styled.div`
  display: flex;
  row-gap: 30px;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`;

export const Image1 = styled.img`
  width: 500px;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 97;
  @media screen and (max-width: 1480px) {
    width: 400px;
  }
  @media screen and (max-width: 1150px) {
    width: 300px;
  }
  @media screen and (max-width: 770px) {
    width: 250px;
  }
`;
export const Image2 = styled.img`
  width: 300px;
  bottom: 0;
  position: absolute;
  z-index: 99;
  @media screen and (max-width: 1480px) {
    width: 200px;
  }
  @media screen and (max-width: 1150px) {
    width: 150px;
  }
  @media screen and (max-width: 770px) {
    width: 150px;
  }
  @media screen and (max-width: 470px) {
    right: 0;
  }
`;
export const SImage1 = styled.img`
  width: 300px;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 97;
  @media screen and (max-width: 770px) {
    width: 250px;
  }
`;
export const SImage2 = styled.img`
  width: 200px;
  bottom: 0;
  position: absolute;
  z-index: 99;
  @media screen and (max-width: 770px) {
    width: 150px;
  }
  @media screen and (max-width: 470px) {
    right: 0;
  }
`;
