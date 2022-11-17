import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 60px 40px;
  margin-top: 300px;
  background-image: url(images/Help_Background.jpg);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: right;
  background-origin: content-box;
  @media screen and (max-width: 1376px) {
    background-origin: border-box;
  }
  @media screen and (max-width: 400px) {
    background-image: none;
    padding: 60px 10px;
  }
`;
export const FormWrapper = styled.div`
  background-color: #e20531;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 576px;
  height: 612px;
  padding: 0 60px;
  @media screen and (max-width: 770px) {
    width: 100%;
    align-items: center;
    padding: 0;
    height: 100%;
    padding-bottom: 30px;
  }
`;
export const FormTextS = styled.div`
  margin-top: 116px;
  font-size: 36px;
  color: white;
  @media screen and (max-width: 770px) {
    font-size: 18px;
    margin-top: 60px;
  }
  @media screen and (max-width: 550px) {
    margin-top: 25px;
  }
`;
export const FormTextL = styled.div`
  margin: 42px;
  font-size: 48px;
  color: white;
  @media screen and (max-width: 770px) {
    font-size: 24px;
  }
`;
export const InputBar = styled.div`
  display: flex;
  margin: 0 auto;
  column-gap: 10px;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Input = styled.input`
  outline: none;
  -webkit-appearance: none;
  background-color: #e20531;
  box-shadow: none;
  border: none;
  border-bottom: 1px solid #ffffff70;
  padding: 16px;
  color: white;
  font-size: 20px;
  &::placeholder {
    color: white;
    font-size: 16px;
  }
  &:focus::placeholder {
    color: transparent;
  }
  @media screen and (max-width: 770px) {
    width: 45%;
  }
  @media screen and (max-width: 550px) {
    width: 80%;
  }
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 55px;
  width: 50%;
  height: 48px;
  color: #e20531;
  background-color: white;
  cursor: pointer;
`;
