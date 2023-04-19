import { Component } from 'react';
import { StyledControlPanel } from '@styles/components/ControlPanel.style';
import { ToggleHistoryButton } from '@styles/components/History.style';

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
        <ToggleHistoryButton onClick={toggleHistory}>
          {isHistoryOpen ? '<' : '>'}
        </ToggleHistoryButton>
      </StyledControlPanel>
    );
  }
}
