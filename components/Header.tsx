// components/Header.tsx
import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;

  @media (min-width: 1024px) {
    padding: 24px 32px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 16px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>MyLogo</Logo>
      <NavLinks>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
