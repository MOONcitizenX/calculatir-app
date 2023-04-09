import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledMain = styled.main`
  background-color: #6b8fc1;
`;

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 20px;
`;
