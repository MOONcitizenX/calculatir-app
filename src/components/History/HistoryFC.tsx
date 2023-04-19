import { useTypedSelector } from '@hooks/useTypedSelector';
import { HistoryWrapper, StyledHistoryList } from './History.style';

interface HistoryFCProps {
  isHistoryOpen: boolean;
}

export const HistoryFC = ({ isHistoryOpen }: HistoryFCProps) => {
  const historyList = useTypedSelector((state) => state.history.historyList);

  return (
    <>
      <HistoryWrapper $isOpen={isHistoryOpen}>
        <h3>History</h3>
        <StyledHistoryList>
          {historyList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </StyledHistoryList>
      </HistoryWrapper>
    </>
  );
};
