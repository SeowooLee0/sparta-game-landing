// components/Header.tsx
import LogoSVG from "../public/assets/newLogo.a1d35235.svg";
import { useEffect, useState } from "react";
import * as S from "./style";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Wrapper isVisible={isVisible}>
      <S.HeaderContainer>
        <S.Logo>
          <LogoSVG />
        </S.Logo>
      </S.HeaderContainer>
    </S.Wrapper>
  );
};

export default Header;
