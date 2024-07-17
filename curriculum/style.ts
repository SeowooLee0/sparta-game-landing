import styled from "@emotion/styled";

export const CurriculumB = styled.section`
  background-color: #f6f9fa;
  padding: 60px 16px;
`;

export const CurriculumSection = styled.section`
  min-width: 328px;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

export const CurriculumSpan = styled.span`
  display: block;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #ff6c7a !important;
  text-align: center;
`;
export const CurriculumH1 = styled.h1`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #141617;
  text-align: center;
  padding: 8px 0 40px;
  white-space: pre-wrap;
`;

export const CurriculumExampleStackBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const CurriculumExampleStackDetail = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  color: #3a3e41 !important;
  margin-top: 16px;
`;

export const CurriculumExampleStackText = styled.div`
  background-color: #fff1f4;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  color: #e8344e !important;
  border-radius: 4px;
  padding: 2px 6px;
  width: fit-content;

  flex-shrink: 0;
`;

export const CurriculumToggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  &.fade-out {
    opacity: 1;
    transition: opacity 0.15s linear;
  }
`;

export const CurriculumToggleBox = styled.div`
  width: 100%;
  min-width: 328px;
  max-width: 600px;
  padding: 16px 20px;
  background-color: #ffffff;
  border: 1px solid #e4ebf0;
  box-shadow: 0 8px 24px rgba(129, 137, 143, 0.12);
  border-radius: 12px;
  cursor: pointer;
  word-break: keep-all;
`;

export const CurriculumToggleBoxBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  flex-direction: row;
  .div {
    width: 100%;
  }
`;

export const CurriculumToggleBoxTextNumber = styled.p`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #e8344e !important;
  margin-bottom: 4px;
  font-weight: 600;
`;

export const CurriculumToggleBoxTextTitle = styled.p`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #141617;
`;

export const CurriculumToggleBoxTextExplain = styled.p`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  color: #3a3e41 !important;
  padding-top: 4px;
  white-space: pre-wrap;
`;

export const CurriculumToggleBoxBtnSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;
`;

export const CurriculumToggleInner = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export const CurriculumToggleInnerBox = styled.div`
  background-color: rgb(246, 249, 250);
  border-radius: 8px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CurriculumToggleInnerDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CurriculumToggleInnerDetailBoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  .div {
    width: 100%;
  }
`;

export const CurriculumToggleDetailTitleColor = styled.p`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: rgb(20, 22, 23) !important;
`;

export const CurriculumToggleDetailTitleExColor = styled.p`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: rgb(20, 22, 23);
`;

export const CurriculumToggleInnerDetailUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const CurriculumToggleInnerDetailLi = styled.li`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  display: flex;
  gap: 4px;
  color: rgb(129, 137, 143) !important;
`;

export const CurriculumToggleInnerDetailLine = styled.div`
  width: 100%;
  min-height: 1px;
  background: rgb(228, 235, 240);
  margin-top: 20px;
`;
