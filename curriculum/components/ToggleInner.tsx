import { InnerDetail } from "../copy";
import * as S from "../style";

interface ToggleInnerProps {
  innerDetails: InnerDetail[];
}

export default function ToggleInner({ innerDetails }: ToggleInnerProps) {
  return (
    <S.ToggleInner>
      <S.ToggleInnerBox>
        {innerDetails.map((innerDetail, innerIndex) => (
          <S.ToggleInnerDetailBox key={innerIndex}>
            <S.ToggleInnerDetailBoxTitle>
              <div>
                <S.DetailTitleColor>{innerDetail.title}</S.DetailTitleColor>
                <S.DetailTitleExColor>
                  {innerDetail.titleEx}
                </S.DetailTitleExColor>
              </div>
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
  );
}
