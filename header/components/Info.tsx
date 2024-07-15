import { FC } from "react";
import styled from "@emotion/styled";
import {
  GameTopScheduleInfo,
  GameTopScheduleInfoDive,
  InfoDiv,
  InfoDivDiv,
  InfoValue,
  InfoValue2,
} from "../style";

const Info: FC = () => {
  return (
    <GameTopScheduleInfo>
      <GameTopScheduleInfoDive>
        <InfoDiv>
          <InfoDivDiv>
            <div>
              <InfoValue>교육 기간</InfoValue>
              <InfoValue2>24.08.05(월) ~ 24.12.23(월)</InfoValue2>
            </div>
            <div>
              <InfoValue>교육 방법</InfoValue>
              <InfoValue2>100% 온라인 (평일 오전 9시 ~ 오후 9시)</InfoValue2>
            </div>
            <div>
              <InfoValue>교육 기간</InfoValue>
              <InfoValue2>전액 무료 (내일배움카드 국비지원)</InfoValue2>
            </div>
            <div>
              <InfoValue>교육 기간</InfoValue>
              <InfoValue2>24.08.02(금)</InfoValue2>
            </div>
          </InfoDivDiv>
        </InfoDiv>
      </GameTopScheduleInfoDive>
    </GameTopScheduleInfo>
  );
};

export default Info;
