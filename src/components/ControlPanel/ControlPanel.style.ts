import styled from 'styled-components';
import { StyledKeypadButton } from '@styles/shared';

export const StyledControlPanel = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ToggleHistoryButton = styled(StyledKeypadButton)`
  width: 40px;
  border-radius: 8px;
  text-align: center;
`;
