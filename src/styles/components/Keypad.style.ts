import styled from 'styled-components';

export const KeypadWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
`;

interface KeypadButtonProps {
  $isSecondary?: boolean;
}

export const StyledKeypadButton = styled.button<KeypadButtonProps>`
  color: ${({ $isSecondary = false, theme }) =>
    $isSecondary ? theme.colors.text.secondary : theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.primary};
  font-size: 24px;
  width: 100%;
  max-width: 60px;
  aspect-ratio: 1/1;
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
`;
