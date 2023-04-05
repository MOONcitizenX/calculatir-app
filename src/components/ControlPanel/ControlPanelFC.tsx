import { StyledControlPanel } from '@styles/components/ControlPanel.style';
import { ToggleHistoryButton } from '@styles/components/History.style';

interface ControlPanelFCProps {
  toggleHistory: () => void;
  isHistoryOpen: boolean;
}

export const ControlPanelFC = ({ toggleHistory, isHistoryOpen }: ControlPanelFCProps) => {
  return (
    <StyledControlPanel>
      <p>Toggle history</p>
      <ToggleHistoryButton onClick={toggleHistory}>{isHistoryOpen ? '<' : '>'}</ToggleHistoryButton>
    </StyledControlPanel>
  );
};
