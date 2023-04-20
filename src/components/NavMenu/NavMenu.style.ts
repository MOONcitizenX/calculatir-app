import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  position: static;
  @media screen and (max-width: 480px) {
  }
`;

interface IsMenuOpenProps {
  $isMenuOpen: boolean;
}

export const StyledNavList = styled.ul<IsMenuOpenProps>`
  font-size: 22px;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: flex-end;

  transition: transform 0.3s ease-in-out;
  @media screen and (max-width: 480px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background.primary};

    transform: ${({ $isMenuOpen }) => ($isMenuOpen ? 'translate(0)' : 'translate(100%)')};
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text.primary};
  &.active {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const StyledBurgerButton = styled.div<IsMenuOpenProps>`
  width: 40px;
  aspect-ratio: 1/1;
  padding: 5px;

  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 4;

  display: none;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & span:first-child {
      ${({ $isMenuOpen }) => $isMenuOpen && 'transform: rotate(45deg) translate(8px, 6px)'};
    }
    & span:last-child {
      ${({ $isMenuOpen }) => $isMenuOpen && 'transform: rotate(-45deg) translate(7px, -7px)'};
    }
    & span:nth-child(2) {
      ${({ $isMenuOpen }) => $isMenuOpen && 'opacity: 0'};
    }
  }
`;

export const StyledBurgerLine = styled.span`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.text.primary};
  transition: transform 0.3s ease-in-out;
`;
