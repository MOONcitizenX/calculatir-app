import React, { createContext, useContext, useEffect } from 'react';
import { useTypedActions } from '@hooks/useTypedActions';
import { type Calculator } from '@utils/Calculator';
import { equalsEvent } from '@constants/calculatorEvent';

interface CalculatorProviderProps {
  children?: React.ReactNode;
  calculator: Calculator;
}

export interface Context {
  calculator: Calculator;
}

export const CalculatorContext = createContext<Context | null>(null);

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (context !== null) {
    return context;
  }
  throw new Error('No calculator context');
};

export const CalculatorProvider: React.FC<CalculatorProviderProps> = ({ children, calculator }) => {
  const { addHistory } = useTypedActions();

  const context: Context = {
    calculator,
  };

  useEffect(() => {
    const addToHistory = (event: Event) => {
      const { expression, result } = (
        event as CustomEvent<{
          expression: string;
          result: string;
        }>
      ).detail;
      addHistory(`${expression} = ${result}`);
    };

    calculator.addEventListener(equalsEvent, addToHistory);

    return () => {
      calculator.removeEventListener(equalsEvent, addToHistory);
    };
  }, [addHistory, calculator]);

  return <CalculatorContext.Provider value={context}>{children}</CalculatorContext.Provider>;
};
