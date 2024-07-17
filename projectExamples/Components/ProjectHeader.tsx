import { BottomLine, HeaderContainer, HeaderDiv } from "../style";
import { useState, useEffect } from "react";

const NextDivHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isSticky={isSticky}>
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
