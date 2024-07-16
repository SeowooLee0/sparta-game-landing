// components/Header.tsx
import Link from "next/link";
import { HeaderContainer, Logo, Wrapper } from "../style";
import LogoSVG from "../../public/assets/newLogo.a1d35235.svg";
import { useEffect, useState } from "react";

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
    <Wrapper isVisible={isVisible}>
      <HeaderContainer>
        <Logo>
          <LogoSVG />
        </Logo>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
