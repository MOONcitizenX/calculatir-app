import { useTypedSelector } from '@hooks/useTypedSelector';
import { HistoryWrapper, StyledHistoryList } from '@styles/components/History.style';

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
          {historyList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </StyledHistoryList>
      </HistoryWrapper>
    </>
  );
};
