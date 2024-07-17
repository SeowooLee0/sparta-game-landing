// ToggleBox.tsx
import { useState } from "react";
import { CurriculumItem, copy } from "../copy";
import * as S from "../style";

export default function ToggleBox() {
  const [isInnerVisible, setIsInnerVisible] = useState<{
    [key: number]: boolean;
  }>({});

  function toggleVisible(index: number) {
    setIsInnerVisible((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  return (
    <S.Toggle>
      {copy.map((item: CurriculumItem, index: number) => (
        <S.ToggleBoxContainer key={index} onClick={() => toggleVisible(index)}>
          <S.ToggleBoxWrapper>
            <S.ToggleInnerTextBox>
              <S.ToggleBoxTextNumber color="#e8344e">
                {item.number}
              </S.ToggleBoxTextNumber>
              <S.ToggleBoxTextTitle>{item.title}</S.ToggleBoxTextTitle>
              <S.ToggleBoxTextExplain>{item.explain}</S.ToggleBoxTextExplain>
              <S.ExampleStackBox>
                <S.ExampleStackDetail>
                  {item.stackDetails.map(
                    (stackItem: string, stackIndex: number) => (
                      <S.ExampleStackText key={stackIndex}>
                        {stackItem}
                      </S.ExampleStackText>
                    )
                  )}
                </S.ExampleStackDetail>
              </S.ExampleStackBox>
            </S.ToggleInnerTextBox>
            <S.ToggleBoxBtnSvg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="earlyBirdWithTimer_section56_abb_svg00"
            >
              {isInnerVisible[index] ? (
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
            </S.ToggleBoxBtnSvg>
          </S.ToggleBoxWrapper>
          {isInnerVisible[index] && (
            <S.ToggleBoxTopMargin>
              <S.ToggleInner>
                <S.ToggleInnerBox>
                  {item.innerDetails.map((innerDetail, innerIndex) => (
                    <S.ToggleInnerDetailBox key={innerIndex}>
                      <S.ToggleInnerDetailBoxTitle>
                        <S.DetailTitleColor>
                          {innerDetail.title}
                        </S.DetailTitleColor>
                        <S.DetailTitleExColor>
                          {innerDetail.titleEx}
                        </S.DetailTitleExColor>
                      </S.ToggleInnerDetailBoxTitle>

                      <S.ToggleInnerDetailUl>
                        {innerDetail.listItems.map((listItem, listIndex) => (
                          <S.ToggleInnerDetailLi key={listIndex}>
                            <p>• </p>
                            {listItem}
                          </S.ToggleInnerDetailLi>
                        ))}
                        {innerDetail.bottomLine && <S.ToggleInnerDetailLine />}
                      </S.ToggleInnerDetailUl>
                    </S.ToggleInnerDetailBox>
                  ))}
                </S.ToggleInnerBox>
              </S.ToggleInner>
            </S.ToggleBoxTopMargin>
          )}
        </S.ToggleBoxContainer>
      ))}
    </S.Toggle>
  );
}
