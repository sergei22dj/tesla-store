import React from "react";
// views
import {
  Button,
  FormTextL,
  FormTextS,
  FormWrapper,
  Input,
  InputBar,
  Wrapper,
} from "./views";

const Feedback = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <FormTextS>Вагаєтесь що обрати або маєте питання?</FormTextS>
        <FormTextL>МИ ДОПОМОЖЕМО!</FormTextL>
        <InputBar>
          <Input placeholder="Ім'я" />
          <Input placeholder="Телефон" />
        </InputBar>
        <Button>Замовити консультацію</Button>
      </FormWrapper>
    </Wrapper>
  );
};
export default Feedback;
