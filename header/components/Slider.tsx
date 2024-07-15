import { FC } from "react";
import styled from "@emotion/styled";

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 55px;
  height: fit-content;
`;

const Slides = styled.ul`
  position: absolute;
  display: flex;
  width: max-content;
  animation: aniScroll 12s linear infinite;

  @keyframes aniScroll {
    0% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      transform: translateX(0%);
    }
    100% {
      -webkit-transform: translateX(-100%);
      -moz-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }
`;

const Slides2 = styled.ul`
  position: absolute;
  display: flex;
  width: max-content;
  animation: aniScroll2 12s linear infinite;

  @keyframes aniScroll2 {
    0% {
      -webkit-transform: translateX(100%);
      -moz-transform: translateX(100%);
      -ms-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      transform: translateX(0%);
    }
  }
`;

const Slide = styled.img`
  width: 135px;
  aspect-ratio: auto 135 / 141;
  height: 141px;
  margin-right: 7px;
`;

const Slider: FC = () => {
  return (
    <SliderContainer>
      <Slides>
        <Slide src="/assets/mo_card_0.png" alt="Image 1" />
        <Slide src="/assets/mo_card_1.png" alt="Image 2" />
        <Slide src="/assets/mo_card_2.png" alt="Image 3" />
        <Slide src="/assets/mo_card_3.png" alt="Image 4" />
        <Slide src="/assets/mo_card_0.png" alt="Image 1" />
        <Slide src="/assets/mo_card_1.png" alt="Image 2" />
        <Slide src="/assets/mo_card_2.png" alt="Image 3" />
        <Slide src="/assets/mo_card_3.png" alt="Image 4" />
      </Slides>
      <Slides2>
        <Slide src="/assets/mo_card_0.png" alt="Image 1" />
        <Slide src="/assets/mo_card_1.png" alt="Image 2" />
        <Slide src="/assets/mo_card_2.png" alt="Image 3" />
        <Slide src="/assets/mo_card_3.png" alt="Image 4" />
        <Slide src="/assets/mo_card_0.png" alt="Image 1" />
        <Slide src="/assets/mo_card_1.png" alt="Image 2" />
        <Slide src="/assets/mo_card_2.png" alt="Image 3" />
        <Slide src="/assets/mo_card_3.png" alt="Image 4" />
      </Slides2>
    </SliderContainer>
  );
};

export default Slider;
