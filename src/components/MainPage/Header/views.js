import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 100px;
  @media screen and (max-width: 500px) {
    padding: 10px 19px;
  }
  @media screen and (max-width: 400px) {
    flex-direction: row-reverse;
  }
`;
export const Logo = styled.img`
  width: 154px;
  @media screen and (max-width: 400px) {
    width: 100px;
    padding-right: 20px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 79px;
  margin-right: auto;
  @media screen and (max-width: 1208px) {
    display: none;
  }
`;
export const Title = styled.div`
  font-size: 16px;
  color: white;
  margin-right: 38px;
  cursor: pointer;
  @media screen and (max-width: 725px) {
    display: none;
  }
`;
export const MenuBtn = styled.img`
  padding-left: 73px;
  @media screen and (max-width: 400px) {
    padding: 0;
  }
`;
export const Phone = styled.img`
  display: none;
  @media screen and (max-width: 400px) {
    display: block;
  }
`;
