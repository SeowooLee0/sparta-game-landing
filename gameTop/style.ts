import styled from "@emotion/styled";
import {
  PretendardFont,
  FontWeight,
  FontSize,
  LineHeight,
  Colors,
} from "../styles/fontStyles";

export const Wrapper = styled.div<{ isVisible: boolean }>`
  position: fixed;
  height: fit-content;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  background-color: white;
  width: 100%;
  padding-top: 0px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 0px;
  border-bottom: 1px solid #e4ebf0;

  justify-content: space-around;
  z-index: 21;
  @media (min-width: 1024px) {
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  color: white;
  height: 50px;
  width: 100%;

  @media (min-width: 1024px) {
    height: 60px;
    max-width: 1200px;
    padding-top: 0px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 0px;
  }
`;

export const Logo = styled.div`
  margin-top: 3px;
  width: 134px;
  height: 40px;
`;

export const MobileImage = styled.img`
  width: 1024px;
  aspect-ratio: auto 1024 / 656;
  height: 656px;
}
`;

export const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 55px;
  height: fit-content;
`;

export const Slides = styled.ul`
  position: absolute;
  display: flex;
  width: max-content;
  animation: aniScroll 12s linear infinite;

  @keyframes aniScroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export const Slides2 = styled.ul`
  position: absolute;
  display: flex;
  width: max-content;
  animation: aniScroll2 12s linear infinite;

  @keyframes aniScroll2 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

export const Slide = styled.img`
  width: 135px;
  aspect-ratio: auto 135 / 141;
  height: 141px;
  margin-right: 7px;
`;

export const Section = styled.section`
  background: radial-gradient(
    159.82% 159.82% at 50% 166.08%,
    rgb(109, 119, 207) 0%,
    rgb(20, 22, 23) 85.5%
  );
  z-index: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 733px;
`;

export const ScheduleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 0;
  padding: 0;
`;

export const GridContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 77px;
  left: 50%;
  transform: translate(-50%, 0px);
`;

export const GameHeroLogo = styled.img`
  margin-top: 120px;
  width: 247px;
  aspect-ratio: auto 247 / 26;
  height: 26px;
`;

export const DesktopImage = styled.img`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const ScheduleFont = styled.h1`
  ${PretendardFont};
  font-weight: ${FontWeight.bold};
  font-size: 28px;
  line-height: 39px;
  color: ${Colors.white} !important;
  text-align: center;
  height: 78px;
  span {
    color: ${Colors.highlightRed} !important;
  }
`;
export const ScheduleBtn = styled.a`
  z-index: 10;
  ${PretendardFont}
  font-weight: ${FontWeight.semiBold};
  font-size: 16px;
  line-height: 26px;
  color: #141617;
  border-radius: 8px;
  background: #e8344e;
  color: #ffffff !important;

  display: flex;
  width: 164px;
  height: 54px;
  padding: 16px 20px;

  justify-content: center;

  align-items: center;
  gap: 10px;

  flex-shrink: 0;
  margin-top: 8px;
`;

export const ScheduleInfo = styled.div`
  height: fit-content;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  unicode-bidi: isolate;
`;

export const ScheduleInfoDive = styled.div`
  background: rgba(20, 22, 23, 0.64);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: fit-content;
`;

export const InfoDiv = styled.div`
  min-width: 360px;
  margin: 0px auto;
  padding: 32px 16px;
`;

export const InfoDivDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: auto;
  div {
    display: flex;
    gap: 20px;
    white-space: nowrap;
    word-break: keep-all;
    } 
  
  }
`;

export const InfoValue = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  width: 52px;
  color: ${Colors.darkGray}; !important;
`;

export const InfoValue2 = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  color: ${Colors.lightGray} !important;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
