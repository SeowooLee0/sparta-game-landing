import Link from "next/link";

import LogoSVG from "../../public/assets/newLogo.a1d35235.svg";
import { BottomLine, HeaderContainer, HeaderDiv } from "../style";

const NextDivHeader = () => {
  return (
    <HeaderContainer>
      <HeaderDiv>
        <a>프로젝트</a>
        <BottomLine />
      </HeaderDiv>
      <HeaderDiv>
        <a>트랙 소개</a>
        <BottomLine />
      </HeaderDiv>
      <HeaderDiv>
        <a>커리큘럼</a>
        <BottomLine />
      </HeaderDiv>
      <HeaderDiv>
        <a>취업 서포트</a>
        <BottomLine />
      </HeaderDiv>
      <HeaderDiv>
        <a>모집 개요</a>
        <BottomLine />
      </HeaderDiv>
    </HeaderContainer>
  );
};

export default NextDivHeader;
