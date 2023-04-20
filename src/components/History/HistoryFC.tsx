import { useTypedSelector } from '@hooks/useTypedSelector';
import {
  HistoryWrapper,
  StyledHeading,
  StyledHistoryItem,
  StyledHistoryList,
} from './History.style';

interface HistoryFCProps {
  isHistoryOpen: boolean;
}

export const HistoryFC = ({ isHistoryOpen }: HistoryFCProps) => {
  const historyList = useTypedSelector((state) => state.history.historyList);

  return (
    <>
      <HistoryWrapper $isOpen={isHistoryOpen}>
        <StyledHeading>History</StyledHeading>
        <StyledHistoryList>
          {historyList.map((item, index) => (
            <StyledHistoryItem key={index}>{item}</StyledHistoryItem>
          ))}
        </StyledHistoryList>
      </HistoryWrapper>
    </>
  );
};
