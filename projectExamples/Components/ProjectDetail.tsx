import { useRef, useEffect } from "react";
import * as S from "../style";
import ProjectVideoEx from "./ProjectVideoEx";

const Project = () => {
  return (
    <>
      <S.TopSec>
        <S.TopSecSec>
          <div>
            <S.TopInfoDiv>누구나 시작할 수 있도록</S.TopInfoDiv>
            <S.TopInfoH3>
              게임 업계 취업을 위한
              <br />
              게임 서버 개발 부트캠프
            </S.TopInfoH3>
          </div>
          <S.ImgSection>
            <S.Img1
              src={"/assets/unity_sold_out_mo.webp"}
              alt={"/assets/unity_sold_out_mo.webp"}
            />
            <S.Img1Info>
              Node.js 게임 서버 개발자 국비부트캠프는
              <br />
              스타르타 내일배움캠프가 유일합니다.
            </S.Img1Info>
          </S.ImgSection>
        </S.TopSecSec>
      </S.TopSec>
      <S.Section>
        <S.SecSec>
          <S.InfoSec>
            <div>
              <S.TopInfoDiv>프로젝트 예시</S.TopInfoDiv>
              <S.InfoH4>
                실제 현업과 동일한
                <br />
                {`게임 서버를 '직접' 개발합니다`}
              </S.InfoH4>
              <S.InfoDetail>
                아래 프로젝트 외에도 풋살 게임, 액션 게임, 전략 게임 등<br />
                다양한 장르의 게임을 직접 개발해봅니다.
              </S.InfoDetail>
            </div>
          </S.InfoSec>

          <ProjectVideoEx />
        </S.SecSec>
      </S.Section>
    </>
  );
};

export default Project;
