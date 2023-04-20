import styled from 'styled-components';

export const SwitcherWrapper = styled.div`
  width: 100%;
  padding: 4px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 0.5rem;
  box-shadow: 2px 2px 12px ${({ theme }) => theme.colors.shadow.primary},
    -2px -2px 12px ${({ theme }) => theme.colors.shadow.secondary};
`;

export const StyledLabel = styled.label`
  text-align: center;
  font-size: 20px;
  & input {
    display: none;
    &:checked + span {
      color: ${({ theme }) => theme.colors.text.secondary};
      box-shadow: inset 2px 2px 12px ${({ theme }) => theme.colors.shadow.primary},
        inset -2px -2px 12px ${({ theme }) => theme.colors.shadow.secondary};
    }
  }
`;

export const StyledSwitch = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  user-select: none;
`;
