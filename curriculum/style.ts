import { Colors, CommonFont } from "@/styles/fontStyles";
import styled from "@emotion/styled";

export const B = styled.section`
  background-color: #f6f9fa;
  padding: 60px 16px;
`;

export const Section = styled.section`
  min-width: 328px;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

export const Span = styled.span`
  ${CommonFont};
  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: ${Colors.highlightRed} !important;
  text-align: center;
`;

export const H1 = styled.h1`
  ${CommonFont};
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: ${Colors.black};
  text-align: center;
  padding: 8px 0 40px;
  white-space: pre-wrap;
`;

export const ExampleStackBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const ExampleStackDetail = styled.div`
  ${CommonFont};
  display: flex;
  gap: 8px;
  align-items: flex-start;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  color: #3a3e41 !important;
  margin-top: 16px;
`;

export const ExampleStackText = styled.div`
  ${CommonFont};
  background-color: #fff1f4;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${Colors.red} !important;
  border-radius: 4px;
  padding: 2px 6px;
  width: fit-content;
  flex-shrink: 0;
`;

export const Toggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  &.fade-out {
    opacity: 1;
    transition: opacity 0.15s linear;
  }
`;

export const ToggleBoxTopMargin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export const ToggleBoxContainer = styled.div`
  width: 100%;
  min-width: 328px;
  max-width: 600px;
  padding: 16px 20px;
  background-color: ${Colors.white};
  border: 1px solid #e4ebf0;
  box-shadow: 0 8px 24px rgba(129, 137, 143, 0.12);
  border-radius: 12px;
  cursor: pointer;
  word-break: keep-all;
`;

export const ToggleBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  flex-direction: row;
`;

export const ToggleBoxTextNumber = styled.p`
  ${CommonFont};
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${Colors.red} !important;
  margin-bottom: 4px;
  font-weight: 600;
`;

export const ToggleBoxTextTitle = styled.p`
  ${CommonFont};
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: ${Colors.black};
`;

export const ToggleBoxTextExplain = styled.p`
  ${CommonFont};
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  color: #3a3e41 !important;
  padding-top: 4px;
  white-space: pre-wrap;
`;

export const ToggleBoxBtnSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;
`;

export const ToggleInner = styled.div`
  display:  "flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export const ToggleInnerBox = styled.div`
  background-color: rgb(246, 249, 250);
  border-radius: 8px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ToggleInnerDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ToggleInnerDetailBoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ToggleInnerTextBox = styled.div`
  width: 100%;
`;

export const DetailTitleColor = styled.p`
  ${CommonFont};
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${Colors.black} !important;
`;

export const DetailTitleExColor = styled.p`
  ${CommonFont};
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: ${Colors.black};
`;

export const ToggleInnerDetailUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ToggleInnerDetailLi = styled.li`
  ${CommonFont};
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  display: flex;
  gap: 4px;
  color: ${Colors.darkGray} !important;
`;

export const ToggleInnerDetailLine = styled.div`
  width: 100%;
  min-height: 1px;
  background: ${Colors.bottomLine};
  margin-top: 20px;
`;
