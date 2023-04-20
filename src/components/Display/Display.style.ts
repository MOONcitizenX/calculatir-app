import styled from 'styled-components';

export const StyledDisplay = styled.div`
  width: 100%;
  padding: 16px;
  margin-bottom: 40px;
  min-height: 160px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 16px;
  box-shadow: 2px 2px 12px ${({ theme }) => theme.colors.shadow.primary},
    -2px -2px 12px ${({ theme }) => theme.colors.shadow.secondary};
  user-select: none;
`;

export const StyledExpression = styled.p`
  font-size: 22px;
`;

export const StyledResult = styled.p`
  font-size: 24px;
  min-height: 36px;
  font-weight: 900;
`;
