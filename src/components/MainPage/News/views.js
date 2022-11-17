import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0 40px 171px;
  flex-wrap: wrap;
  column-gap: 51px;
  row-gap: 51px;
  justify-content: center;
`;
export const LWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 51px;
  row-gap: 51px;
  text-align: left;
  justify-content: center;
`;
export const RWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 51px;
  width: 505px;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;
export const CardItem = styled.div`
  width: 486px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
export const SCardItem = styled.div`
  display: flex;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;
export const Title = styled.div`
  font-size: 48px;
  color: #272531;
  margin: 200px 0 150px;
  text-align: left;
  padding: 0 40px;
`;
export const Image = styled.img`
  width: 486px;
  height: 341;
  @media screen and (max-width: 550px) {
    width: 280px;
  }
`;
export const ImageS = styled.img`
  height: 145px;
  padding-right: 24px;
`;
export const Name = styled.div`
  font-size: 20px;
  margin-top: 30px;
  font-weight: 500;
`;
export const SName = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
export const Text = styled.div`
  color: #939298;
  font-weight: 400;
  font-size: 16px;
  margin-top: 30px;
`;
export const Button = styled.div`
  font-size: 16px;
  color: #e20531;
  margin-top: 45px;
  text-align: left;
  cursor: pointer;
`;
export const SText = styled.div`
  color: #939298;
  font-weight: 400;
  font-size: 16px;
`;
export const SButton = styled.div`
  font-size: 16px;
  color: #e20531;
  text-align: left;
  cursor: pointer;
`;
