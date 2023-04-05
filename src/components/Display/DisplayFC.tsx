import { StyledDisplay, StyledExpression, StyledResult } from '@styles/components/Display.style';

interface DisplayFCProps {
  expression: string;
  result: string;
}

export const DisplayFC = ({ expression, result }: DisplayFCProps) => {
  return (
    <StyledDisplay>
      <StyledExpression>{expression}</StyledExpression>
      <StyledResult>{result}</StyledResult>
    </StyledDisplay>
  );
};
