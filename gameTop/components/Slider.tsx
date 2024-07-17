import * as C from "../copy";
import * as S from "../style";

export default function Slider() {
  return (
    <S.SliderContainer>
      <S.Slides>
        {C.slideData.map((slide: C.SlideInfo, index: number) => (
          <S.Slide key={index} src={slide.src} alt={slide.alt} />
        ))}
      </S.Slides>
      <S.Slides2>
        {C.slideData.map((slide: C.SlideInfo, index: number) => (
          <S.Slide key={index} src={slide.src} alt={slide.alt} />
        ))}
      </S.Slides2>
    </S.SliderContainer>
  );
}
