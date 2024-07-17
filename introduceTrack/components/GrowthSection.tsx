import { growthSections } from "../copy";
import * as S from "../style";
import type { GrowthSection } from "../copy";

export default function GrowthSection() {
  return (
    <>
      {growthSections.map((item: GrowthSection, index: number) => (
        <S.GrowthSection key={index}>
          <S.GrowthDiv>
            <S.GrowthText>
              <S.GrowthTextB>{item.title}</S.GrowthTextB>
              <S.GrowthTextS>{item.description}</S.GrowthTextS>
            </S.GrowthText>
            <S.GrowthImageH3>
              <S.GrowthImage src={item.imageSrc} alt={item.imageSrc} />
            </S.GrowthImageH3>
          </S.GrowthDiv>
        </S.GrowthSection>
      ))}
    </>
  );
}
