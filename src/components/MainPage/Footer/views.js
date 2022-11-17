import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  background-color: #1c1b22;
  min-height: 376px;
  padding: 80px 80px;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;
export const Title = styled.div`
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
export const LogosBar = styled.div`
  display: flex;
  @media screen and (max-width: 550px) {
    flex-wrap: wrap;
    row-gap: 20px;
  }
`;
export const LogoW = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: #e20531;
  margin-right: 20px;
  cursor: pointer;
`;
export const LogoS = styled.img``;
