import { forwardRef } from 'react';
import { StyledControlPanel, ToggleHistoryButton } from './ControlPanel.style';

interface ControlPanelFCProps {
  toggleHistory: () => void;
  isHistoryOpen: boolean;
}

export const ControlPanelFC = forwardRef<HTMLDivElement, ControlPanelFCProps>(
  ({ toggleHistory, isHistoryOpen }: ControlPanelFCProps, ref) => {
    return (
      <StyledControlPanel ref={ref}>
        <p>Toggle history</p>
        <ToggleHistoryButton onClick={toggleHistory}>
          {isHistoryOpen ? '<' : '>'}
        </ToggleHistoryButton>
      </StyledControlPanel>
    );
  }
);
