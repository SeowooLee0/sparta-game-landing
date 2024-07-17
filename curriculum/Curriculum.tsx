import { EarlyBirdTimerBtnSvg } from "@/introduceTrack/style";
import {
  CurriculumB,
  CurriculumExampleStackBox,
  CurriculumExampleStackDetail,
  CurriculumExampleStackText,
  CurriculumH1,
  CurriculumSection,
  CurriculumSpan,
  CurriculumToggle,
  CurriculumToggleBox,
  CurriculumToggleBoxBox,
  CurriculumToggleBoxBtnSvg,
  CurriculumToggleBoxTextExplain,
  CurriculumToggleBoxTextNumber,
  CurriculumToggleBoxTextTitle,
  CurriculumToggleDetailTitleColor,
  CurriculumToggleDetailTitleExColor,
  CurriculumToggleInner,
  CurriculumToggleInnerBox,
  CurriculumToggleInnerDetailBox,
  CurriculumToggleInnerDetailBoxTitle,
  CurriculumToggleInnerDetailLi,
  CurriculumToggleInnerDetailLine,
  CurriculumToggleInnerDetailUl,
} from "./style";
import { useState } from "react";

export default function Curriculum() {
  const [isInnerVisible, setIsInnerVisible] = useState(false);

  const toggleInnerBox = () => {
    setIsInnerVisible(!isInnerVisible);
  };
  return (
    <>
      <CurriculumB>
        <CurriculumSection onClick={toggleInnerBox}>
          <CurriculumSpan>상세 커리큘럼</CurriculumSpan>
          <CurriculumH1>
            포트폴리오까지 한 번에,
            <br />
            프로젝트 기반의 커리큘럼
          </CurriculumH1>
          <CurriculumToggle>
            <CurriculumToggleBox>
              <CurriculumToggleBoxBox>
                <div>
                  <CurriculumToggleBoxTextNumber>
                    01
                  </CurriculumToggleBoxTextNumber>
                  <CurriculumToggleBoxTextTitle>
                    웹 개발 미니 프로젝트
                  </CurriculumToggleBoxTextTitle>
                  <CurriculumToggleBoxTextExplain>
                    웹 개발 기초 강의를 수강하며 웹 개발 전반의 흐름을 이해하고
                    이를 활용한 미니 프로젝트를 통해 기본기를 다지고 협업 경험을
                    합니다.
                  </CurriculumToggleBoxTextExplain>
                  <CurriculumExampleStackBox>
                    <CurriculumExampleStackDetail>
                      <CurriculumExampleStackText>
                        1주 과정
                      </CurriculumExampleStackText>
                      <CurriculumExampleStackText>
                        미니 프로젝트
                      </CurriculumExampleStackText>
                      <CurriculumExampleStackText>
                        실시간 세션
                      </CurriculumExampleStackText>
                    </CurriculumExampleStackDetail>
                  </CurriculumExampleStackBox>
                </div>
                <CurriculumToggleBoxBtnSvg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  id="earlyBirdWithTimer_section56_abb_svg00"
                >
                  {isInnerVisible ? (
                    <path
                      d="M17.2929 15.7071C17.6834 16.0976 18.3166 16.0976 18.7071 15.7071C19.0976 15.3166 19.0976 14.6834 18.7071 14.2929L17.2929 15.7071ZM12 9L12.7071 8.29289C12.3166 7.90237 11.6834 7.90237 11.2929 8.29289L12 9ZM5.29289 14.2929C4.90237 14.6834 4.90237 15.3166 5.29289 15.7071C5.68342 16.0976 6.31658 16.0976 6.70711 15.7071L5.29289 14.2929ZM18.7071 14.2929L12.7071 8.29289L11.2929 9.70711L17.2929 15.7071L18.7071 14.2929ZM11.2929 8.29289L5.29289 14.2929L6.70711 15.7071L12.7071 9.70711L11.2929 8.29289Z"
                      fill="#9DA7AE"
                    ></path>
                  ) : (
                    <path
                      d="M6.70711 9.29289C6.31658 8.90237 5.68342 8.90237 5.29289 9.29289C4.90237 9.68342 4.90237 10.3166 5.29289 10.7071L6.70711 9.29289ZM12 16L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L12 16ZM18.7071 10.7071C19.0976 10.3166 19.0976 9.68342 18.7071 9.29289C18.3166 8.90237 17.6834 8.90237 17.2929 9.29289L18.7071 10.7071ZM5.29289 10.7071L11.2929 16.7071L12.7071 15.2929L6.70711 9.29289L5.29289 10.7071ZM12.7071 16.7071L18.7071 10.7071L17.2929 9.29289L11.2929 15.2929L12.7071 16.7071Z"
                      fill="#9DA7AE"
                    ></path>
                  )}
                </CurriculumToggleBoxBtnSvg>
              </CurriculumToggleBoxBox>
              <CurriculumToggleInner isVisible={isInnerVisible}>
                <CurriculumToggleInnerBox>
                  <CurriculumToggleInnerDetailBox>
                    <CurriculumToggleInnerDetailBoxTitle>
                      <div>
                        <CurriculumToggleDetailTitleColor>
                          미니프로젝트
                        </CurriculumToggleDetailTitleColor>
                        <CurriculumToggleDetailTitleExColor>
                          팀 소개 페이지
                        </CurriculumToggleDetailTitleExColor>
                      </div>
                    </CurriculumToggleInnerDetailBoxTitle>
                    <CurriculumToggleInnerDetailUl>
                      <CurriculumToggleInnerDetailLi>
                        <p>• </p>웹 페이지 동작 이해
                      </CurriculumToggleInnerDetailLi>
                      <CurriculumToggleInnerDetailLi>
                        <p>• </p> Git, Github 실습 (현업을 위한 버전 관리)
                      </CurriculumToggleInnerDetailLi>
                      <CurriculumToggleInnerDetailLine />
                    </CurriculumToggleInnerDetailUl>
                  </CurriculumToggleInnerDetailBox>
                  <CurriculumToggleInnerDetailBox>
                    <CurriculumToggleInnerDetailBoxTitle>
                      <div>
                        <CurriculumToggleDetailTitleColor>
                          실시간 세션
                        </CurriculumToggleDetailTitleColor>
                        <CurriculumToggleDetailTitleExColor>
                          개발자 직무 이해
                        </CurriculumToggleDetailTitleExColor>
                      </div>
                    </CurriculumToggleInnerDetailBoxTitle>
                    <CurriculumToggleInnerDetailUl>
                      <CurriculumToggleInnerDetailLi>
                        <p>• </p>대기업 출신 개발자기 소개하는 개발의 모든 것
                      </CurriculumToggleInnerDetailLi>
                      <CurriculumToggleInnerDetailLi>
                        <p>• </p>개발 역량을 베이스로 할 수 있는 커리어 패스
                      </CurriculumToggleInnerDetailLi>
                    </CurriculumToggleInnerDetailUl>
                  </CurriculumToggleInnerDetailBox>
                </CurriculumToggleInnerBox>
              </CurriculumToggleInner>
            </CurriculumToggleBox>
          </CurriculumToggle>
        </CurriculumSection>
      </CurriculumB>
    </>
  );
}
