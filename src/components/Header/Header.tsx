import { NavMenu } from '@components/NavMenu/NavMenu';
import { StyledHeader } from './Header.style';
import { StyledContainer } from '@styles/shared';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <NavMenu />
      </StyledContainer>
    </StyledHeader>
  );
};
