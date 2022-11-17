import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 100px;
  column-gap: 51px;
  padding: 0 40px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 100px;
  margin-bottom: 80px;
  @media screen and (max-width: 770px) {
    flex-direction: column;
    align-items: start;
  }
`;
export const Name = styled.div`
  font-size: 45px;
  margin-top: 150px;
`;
export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 770px) {
    flex-wrap: wrap;
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
  margin: 80px auto 0;
`;
export const Title = styled.div`
  font-size: 16px;
  color: #939298;
`;
export const Point = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #e20531;
  margin: 0 20px;
`;
