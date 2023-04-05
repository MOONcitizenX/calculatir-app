import styled from 'styled-components';

export const StyledControlPanel = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;
