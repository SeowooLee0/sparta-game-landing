import { Colors } from "@/styles/fontStyles";
import styled from "@emotion/styled";

export const Wrapper = styled.div<{ isVisible: boolean }>`
  position: fixed;
  height: fit-content;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  background-color: ${Colors.white};
  width: 100%;
  border-bottom: 1px solid ${Colors.bottomLine};
  justify-content: space-around;
  z-index: 21;
  @media (min-width: 1024px) {
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  color: ${Colors.white};
  height: 50px;
  width: 100%;
  padding: 0px 16px;
  @media (min-width: 1024px) {
    height: 60px;
    max-width: 1200px;
    padding: 0px 24px;
  }
`;

export const Logo = styled.div`
  margin-top: 3px;
  width: 134px;
  height: 40px;
`;
