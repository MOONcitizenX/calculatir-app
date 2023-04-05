import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  box-shadow: 2px 2px 12px ${({ theme }) => theme.colors.shadow.primary};
`;

export const StyledNavList = styled.ul`
  font-size: 22px;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text.primary};
  &.active {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;
