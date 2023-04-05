import { KeypadWrapper, StyledKeypadButton } from '@styles/components/Keypad.style';
import { buttons } from '@constants/KeypadButtons';

export const KeypadFC = () => {
  return (
    <KeypadWrapper>
      {buttons.map(({ key, isSecondary }) => {
        return (
          <StyledKeypadButton key={key} $isSecondary={isSecondary}>
            {key}
          </StyledKeypadButton>
        );
      })}
    </KeypadWrapper>
  );
};
