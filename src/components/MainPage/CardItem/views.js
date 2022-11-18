import styled from "styled-components";

export const Wrapper = styled.div`
  width: 486px;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: start;
  }
`;
export const Name = styled.div`
  text-align: left;
  font-size: 24px;
  margin-top: 45px;
`;
export const PriceBar = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 34px;
  margin-top: 25px;
`;
export const PriceM = styled.div`
  font-size: 32px;
  color: #e20531;
`;
export const PriceS = styled.div`
  font-size: 20px;
  color: #27253180;
`;
export const InfoWrapper = styled.div`
  margin-top: 45px;
  border-bottom: 1px solid #27253120;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #27253120;
  padding: 22px 0;
`;
export const InfoName = styled.div`
  font-size: 16px;
  color: #939298;
`;
export const InfoValue = styled.div`
  font-size: 20px;
  color: #272531;
`;
