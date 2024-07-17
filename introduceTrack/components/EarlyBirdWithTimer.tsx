import * as S from "../style";

export default function EarlyBirdWithTimer() {
  return (
    <>
      <S.EarlyBirdTimer>
        <S.EarlyBirdTimerSection>
          <S.EarlyBirdTimerSectionDiv>
            <S.EarlyBirdTimerImg
              src={"/assets/event.png"}
              alt={"/assets/eentv.png"}
            />
            <S.EarlyBirdTimerImgTitle>기간 한정 혜택</S.EarlyBirdTimerImgTitle>
            <S.EarlyBirdTimerImgText>
              이번주에 종료되는
              <br />
              혜택이 있어요!
            </S.EarlyBirdTimerImgText>
          </S.EarlyBirdTimerSectionDiv>
          <S.EarlyBirdTimerBtnSection>
            혜택 자세히 보기
            <S.EarlyBirdTimerBtnSvg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              id="earlyBirdWithTimer_section56_abb_svg00"
            >
              <path
                d="M7.91669 4.16663L13.75 9.99996L7.91669 15.8333"
                stroke="#3A3E41"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                id="earlyBirdWithTimer_section56_abb_svg00_path00"
              ></path>
            </S.EarlyBirdTimerBtnSvg>
          </S.EarlyBirdTimerBtnSection>
        </S.EarlyBirdTimerSection>
      </S.EarlyBirdTimer>
    </>
  );
}
