import styled from "@emotion/styled";

export const TrackB = styled.section`
  background-color: #141617;
  padding: 80px 0;
  width: 100%;
`;

export const TrackSection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 328px;
`;

export const TitleDiv = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ff6c7a !important;
  display: block;
  margin-bottom: 8px;
  text-align: center;
`;

export const TitleH3 = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: white !important;
  text-align: center;
`;

export const InfoH4 = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: white !important;
  text-align: center;
  margin: 8px 0 16px 0;
`;

export const GrowthImageH3 = styled.h3`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: white !important;
  position: relative;
  text-align: center;
  width: 328px;
  height: 245px;
`;
export const GrowthImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
`;

export const GrowthSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
`;

export const GrowthDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
`;

export const GrowthText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GrowthTextB = styled.h5`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: white !important;
  margin-bottom: 16px;
  text-align: left;
`;

export const GameCareerText = styled.h5`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: white !important;
`;

export const GrowthTextS = styled.p`
  color: white !important;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
  margin: 0;
  opacity: 0.7;
`;

export const CareerPathBoxSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const CareerPathBox = styled.div`
  display: flex;
  width: 100%;
  gap: 14px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CareerPathInnerBox = styled.div`
  width: 280px;
  flex-shrink: 0;
  padding: 24px;
  border-radius: 12px;
  background: #25282a;
`;

export const CareerPathInnerBoxTitle = styled.div`
  margin: 0 0 4px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: white !important;
`;

export const CareerPathInnerBoxText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  color: white !important;
  opacity: 0.7;
`;

export const CareerPathInnerBoxIcon = styled.img`
  width: 56px;
  height: 56px;
  padding-top: 0;
  border-radius: 5.6px;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const EarlyBirdTimer = styled.section`
  padding: 0 0 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #0f16ae 0%, #031d44 100%);
`;

export const EarlyBirdTimerSection = styled.section`
  width: 100%;
  min-width: 328px;
  max-width: 600px;
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const EarlyBirdTimerSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EarlyBirdTimerImg = styled.img`
  width: 288px;
  aspect-ratio: auto 288 / 184;
  height: 184px;
`;

export const EarlyBirdTimerImgTitle = styled.h4`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #80c2ff !important;
  display: block;
  margin-bottom: 8px;
  text-align: center;
`;
export const EarlyBirdTimerImgText = styled.h1`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #fff !important;
  text-align: center;
`;
export const EarlyBirdTimerBtnSection = styled.a`
  display: flex;
  width: 240px;
  min-width: 100px;
  padding: 13px 20px;

  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  border: 1px solid #e4ebf0;
  background: #fff;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  color: #3a3e41 !important;
`;

export const EarlyBirdTimerBtnSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
`;
