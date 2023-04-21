import { Component } from 'react';
import { StyledControlPanel, ToggleHistoryButton } from './ControlPanel.style';

interface ControlPanelCCProps {
  toggleHistory: () => void;
  isHistoryOpen: boolean;
}
export class ControlPanelCC extends Component<ControlPanelCCProps> {
  render() {
    const { toggleHistory, isHistoryOpen } = this.props;
    return (
      <StyledControlPanel>
        <p>Toggle history</p>
        <ToggleHistoryButton onClick={toggleHistory} data-testid="toggle-history">
          {isHistoryOpen ? '<' : '>'}
        </ToggleHistoryButton>
      </StyledControlPanel>
    );
  }
}
