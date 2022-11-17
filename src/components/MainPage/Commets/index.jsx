import React, { useRef } from "react";
import { commentData } from "./data";
import Rating from "@mui/material/Rating";

// views
import {
  Arrow,
  ArrowB,
  CardWrapper,
  Comment,
  Image,
  Name,
  NavBar,
  StarIcon,
  Stars,
  Title,
  Wrapper,
  WrapperComments,
} from "./views";

const Star = () => {
  return <StarIcon src="images/Star.svg" />;
};
const StarEmpty = () => {
  return <StarIcon src="images/Star_Empty.svg" />;
};
const CommentItem = ({ data }) => {
  return (
    <CardWrapper>
      <Image src={data.image} />
      <Stars>
        <Rating
          readOnly
          value={data.stars}
          icon={<Star />}
          emptyIcon={<StarEmpty />}
        />
      </Stars>
      <Name>{data.name}</Name>

      <Comment>{data.comment}</Comment>
    </CardWrapper>
  );
};

const Comments = () => {
  const ref = useRef(null);

  const scrollStep = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <Title>Відгуки</Title>
      <Wrapper>
        <Arrow
          src="images/Arrow.jpg"
          alt="asd"
          onClick={() => scrollStep(-250)}
        />
        <WrapperComments ref={ref}>
          {commentData.map((el) => (
            <CommentItem data={el} />
          ))}
        </WrapperComments>

        <Arrow
          src="images/Arrow_rev.jpg"
          alt="asd"
          onClick={() => scrollStep(250)}
        />
      </Wrapper>
      <NavBar>
        <ArrowB
          src="images/Arrow.jpg"
          alt="asd"
          onClick={() => scrollStep(-100)}
        />
        <ArrowB
          src="images/Arrow_rev.jpg"
          alt="asd"
          onClick={() => scrollStep(100)}
        />
      </NavBar>
    </>
  );
};
export default Comments;
