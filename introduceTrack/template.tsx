import CareerPath from "./components/CareerPath";
import EarlyBirdWithTimer from "./components/EarlyBirdWithTimer";
import GrowthSection from "./components/GrowthSection";
import * as S from "./style";

export default function IntroduceTrack() {
  return (
    <div>
      <S.TrackB>
        <S.TrackSection>
          <div>
            <S.TitleDiv>왜 게임 서버 개발자인가요?</S.TitleDiv>
            <S.TitleH3>
              높아지는 게임 업계 연봉
              <br />
              늘어나는 서버 개발자 수요
            </S.TitleH3>
          </div>
          <GrowthSection />
        </S.TrackSection>
      </S.TrackB>
      <S.TrackB>
        <S.TrackSection>
          <div>
            <S.TitleDiv>트랙 소개</S.TitleDiv>
            <S.TitleH3>
              시간이 원하는 기술로
              <br />
              대체 불가한 인재가 됩니다
            </S.TitleH3>
          </div>
          <CareerPath />
        </S.TrackSection>
      </S.TrackB>
      <EarlyBirdWithTimer />
    </div>
  );
}
