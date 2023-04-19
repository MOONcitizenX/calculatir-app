import { StyledControlPanel, ToggleHistoryButton } from './ControlPanel.style';

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
