import * as C from "../copy";
import { BottomLine, HeaderContainer, HeaderDiv } from "../style";
import { useState, useEffect } from "react";

export default function ProjectHeader() {
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
      {C.projectHeader.map((item: C.ProjectHeader, index: number) => (
        <HeaderDiv key={index}>
          <a>{item.menu}</a>
          <BottomLine />
        </HeaderDiv>
      ))}
    </HeaderContainer>
  );
}
