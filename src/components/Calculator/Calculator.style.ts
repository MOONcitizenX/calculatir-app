import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 480px) {
    max-width: 100%;
    min-height: 100vh;
  }
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
  @media screen and (max-width: 480px) {
    border-radius: 0;
    box-shadow: none;
    padding-top: 80px;
  }
`;
