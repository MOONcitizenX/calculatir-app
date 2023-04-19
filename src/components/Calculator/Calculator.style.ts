import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const StyledCalculator = styled.div`
  position: relative;
  padding: 30px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  border-radius: 16px;
  box-shadow: 6px 6px 16px ${({ theme }) => theme.colors.shadow.primary},
    -1px -1px 16px ${({ theme }) => theme.colors.shadow.secondary};
  background-color: ${({ theme }) => theme.colors.background.primary};
  overflow: hidden;
`;
