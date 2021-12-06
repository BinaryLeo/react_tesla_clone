import React from "react";
import styled from "styled-components";
function Section({
  title,
  Description,
  BackgroundImg,
  leftBtnText,
  RightBtnText,
}) {
  return (
    <Wrap bgImage={BackgroundImg}>
      <ProductText>
        <h1>{title}</h1>
        <p>{Description}</p>
      </ProductText>
      <Buttons>
        <ButtonSection>
          <LeftButton>{leftBtnText}</LeftButton>
          {RightBtnText && <RightButton>{RightBtnText}</RightButton>}
        </ButtonSection>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-itens: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
const ProductText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonSection = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  opacity: 0.85;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: #e1dddd;
  opacity: 0.65;
  color: #333539;
`;
const Buttons = styled.div``;
const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  margin-bottom: 15px;
`;
