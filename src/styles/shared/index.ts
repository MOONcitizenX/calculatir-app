import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const StyledMain = styled.main`
  background-color: #6b8fc1;
`;

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 20px;
`;

interface KeypadButtonProps {
  $isSecondary?: boolean;
  $isWide?: boolean;
}

export const StyledKeypadButton = styled.button<KeypadButtonProps>`
  color: ${({ $isSecondary = false, theme }) =>
    $isSecondary ? theme.colors.text.secondary : theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.primary};
  font-size: 24px;
  width: 100%;
  max-width: ${({ $isWide }) => ($isWide === true ? '100%' : '60px')};
  grid-column: ${({ $isWide }) => ($isWide === true ? 'span 2' : 'auto')};
  aspect-ratio: ${({ $isWide }) => ($isWide === true ? 'none' : '1/1')};
  border: none;
  border-radius: 16px;
  box-shadow: 3px 3px 12px ${({ theme }) => theme.colors.shadow.primary},
    -3px 3px 12px ${({ theme }) => theme.colors.shadow.secondary};
  transition: all 0.3s ease-in-out;
  user-select: none;

  &:active {
    border: none;
    box-shadow: inset 2px 2px 12px ${({ theme }) => theme.colors.shadow.primary},
      inset -2px -2px 12px ${({ theme }) => theme.colors.shadow.secondary};
  }
  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.text.secondary};
  }

  @media screen and (max-width: 420px) {
    border-radius: 12px;
    font-size: 22px;
  }
`;
