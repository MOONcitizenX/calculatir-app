import { Component } from 'react';
import { connect, type ConnectedProps } from 'react-redux';
import { type RootState } from '@store/reducers';
import {
  HistoryWrapper,
  StyledHeading,
  StyledHistoryItem,
  StyledHistoryList,
} from './History.style';

const mapState = (state: RootState) => ({
  historyList: state.history.historyList,
});

const connector = connect(mapState);

interface HistoryCCDirectProps {
  isHistoryOpen: boolean;
}

type HistoryCCProps = ConnectedProps<typeof connector> & HistoryCCDirectProps;

export class History extends Component<HistoryCCProps> {
  render() {
    const { isHistoryOpen } = this.props;
    return (
      <HistoryWrapper $isOpen={isHistoryOpen}>
        <StyledHeading>History</StyledHeading>
        <StyledHistoryList>
          {this.props.historyList.map((item, index) => (
            <StyledHistoryItem key={index}>{item}</StyledHistoryItem>
          ))}
        </StyledHistoryList>
      </HistoryWrapper>
    );
  }
}

export const HistoryCC = connector(History);
