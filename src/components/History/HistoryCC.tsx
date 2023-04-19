import { Component } from 'react';
import { connect, type ConnectedProps } from 'react-redux';
import { type RootState } from '@store/reducers';
import { HistoryWrapper, StyledHistoryList } from './History.style';

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
        <h3>History</h3>
        <StyledHistoryList>
          {this.props.historyList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </StyledHistoryList>
      </HistoryWrapper>
    );
  }
}

export const HistoryCC = connector(History);
