import * as S from "./style";
import Header from "../components/Header";
import { MobileImage, DesktopImage } from "./style";
import Slider from "./components/Slider";
import Info from "./components/Info";

interface ImageComponentProps {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
}

export default function GameTop() {
  return (
    <>
      <Header />
      <S.Section>
        <S.GridContainer>
          <MobileImage
            src={"/assets/hero_mo_grid.png"}
            alt={"/assets/hero_mo_grid"}
          />
        </S.GridContainer>
        <S.ScheduleDiv>
          <S.GameHeroLogo
            src={"/assets/game_hero_logos.png"}
            alt={"/assets/game_hero_logos"}
          />

          <S.ScheduleFont>
            게임 업계 취업
            <br />
            <span>4개월</span>
            만에 현실로
          </S.ScheduleFont>
          <S.ScheduleBtn>참가 신청하기</S.ScheduleBtn>
        </S.ScheduleDiv>
        <Slider />
        <Info />
      </S.Section>
    </>
  );
}
