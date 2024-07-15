import Link from "next/link";
import {
  GameHeroLogo,
  GameTopScheduleBtn,
  GameTopScheduleDiv,
  GameTopScheduleFont,
  GameTopSection,
  HeaderContainer,
  Logo,
  MobileImageDiv,
  Wrapper,
} from "./style";
import Image from "next/image";
import LogoSVG from "../public/assets/newLogo.a1d35235.svg";
import Header from "./components/Header";
import { FC } from "react";
import { MobileImage, DesktopImage } from "./style";
import Slider from "./components/Slider";
import Info from "./components/Info";

interface ImageComponentProps {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
}

const GameTop = () => {
  return (
    <div>
      <Header />
      <GameTopSection>
        <MobileImage
          src={"/assets/hero_pc_grid.png"}
          alt={"/assets/hero_pc_grid"}
        />
        <GameTopScheduleDiv>
          <GameHeroLogo
            src={"/assets/game_hero_logos.png"}
            alt={"/assets/game_hero_logos"}
          />

          <GameTopScheduleFont>
            게임 업계 취업
            <br />
            <span>4개월</span>
            만에 현실로
          </GameTopScheduleFont>
          <GameTopScheduleBtn>참가 신청하기</GameTopScheduleBtn>
        </GameTopScheduleDiv>
        <Slider />
        <Info />
      </GameTopSection>
    </div>
  );
};

export default GameTop;
