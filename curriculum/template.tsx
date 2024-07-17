import ToggleBox from "./components/ToggleBox";
import * as S from "./style";
import { useState } from "react";

export default function CurriculumTemplate() {
  return (
    <>
      <S.B>
        <S.Section>
          <S.Span>상세 커리큘럼</S.Span>
          <S.H1>
            포트폴리오까지 한 번에,
            <br />
            프로젝트 기반의 커리큘럼
          </S.H1>
          <ToggleBox />
        </S.Section>
      </S.B>
      <S.B>
        <S.Section>
          <S.Span>학습 시간표</S.Span>
          <S.H1>
            내일배움캠프의
            <br />
            하루를 소개합니다
          </S.H1>
        </S.Section>
      </S.B>
    </>
  );
}
