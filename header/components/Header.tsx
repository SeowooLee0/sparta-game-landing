// components/Header.tsx
import Link from "next/link";
import { HeaderContainer, Logo, NavLinks, Wrapper } from "../style";
import LogoSVG from "../../public/assets/newLogo.a1d35235.svg";

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Logo>
          <LogoSVG />
        </Logo>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
