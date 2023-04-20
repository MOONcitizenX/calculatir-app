import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  box-shadow: 2px 2px 12px ${({ theme }) => theme.colors.shadow.primary};
`;
