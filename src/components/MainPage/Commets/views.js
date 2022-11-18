import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  transition: all 1s;
  @media screen and (max-width: 690px) {
    padding-left: 15%;
  }
`;
export const WrapperComments = styled.div`
  display: flex;
  column-gap: 50px;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Title = styled.div`
  font-size: 48px;
  color: #272531;
  margin: 200px 0 150px;
  text-align: left;
  padding: 0 100px;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 374px;
`;
export const Image = styled.img`
  width: 374px;
  height: 223px;
  @media screen and (max-width: 690px) {
    width: 229px;
    height: 100%;
  }
`;
export const Stars = styled.div`
  margin: 43px 0 34px;
`;
export const StarIcon = styled.img`
  width: 21px;
  height: 21px;
`;
export const NavBar = styled.div`
  display: none;
  @media screen and (max-width: 690px) {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
`;
export const ArrowB = styled.img`
  width: 45px;
  height: 45px;
  margin-top: 100px;
  margin: 32px;
  cursor: pointer;
`;
export const Arrow = styled.img`
  width: 45px;
  height: 45px;
  margin-top: 100px;
  margin: 32px;
  cursor: pointer;
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
export const Name = styled.div`
  font-size: 24px;
  color: #272531;
  margin-bottom: 35px;
`;
export const Comment = styled.div`
  font-size: 16px;
  color: #939298;
`;
