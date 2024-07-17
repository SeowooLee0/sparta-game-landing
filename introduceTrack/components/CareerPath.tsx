import * as C from "../copy";
import type { CareerPathItem1, CareerPathItem2 } from "../copy";
import * as S from "../style";

export default function CareerPath() {
  return (
    <>
      <S.CareerPathBoxSection>
        <S.GameCareerText>게임 서버의 대세, Node.js</S.GameCareerText>
        <S.CareerPathBox>
          {C.careerPathData1.map((item: CareerPathItem1, index: number) => (
            <S.CareerPathInnerBox key={index}>
              <S.CareerPathInnerBoxTitle>
                {item.title}
              </S.CareerPathInnerBoxTitle>
              <S.CareerPathInnerBoxText>{item.text}</S.CareerPathInnerBoxText>
            </S.CareerPathInnerBox>
          ))}
        </S.CareerPathBox>
      </S.CareerPathBoxSection>

      <S.CareerPathBoxSection>
        <S.GameCareerText>4개월 후, 더 많은 취업 기회</S.GameCareerText>
        <S.CareerPathBox>
          {C.careerPathData2.map((item: CareerPathItem2, index: number) => (
            <S.CareerPathInnerBox key={index}>
              <S.CareerPathInnerBoxIcon src={item.iconSrc} alt={item.iconAlt} />
              <S.CareerPathInnerBoxTitle>
                {item.title}
              </S.CareerPathInnerBoxTitle>
              <S.CareerPathInnerBoxText>{item.text}</S.CareerPathInnerBoxText>
            </S.CareerPathInnerBox>
          ))}
        </S.CareerPathBox>
      </S.CareerPathBoxSection>
    </>
  );
}
