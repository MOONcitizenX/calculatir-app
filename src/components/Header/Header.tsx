import ROUTES from '@constants/routes';
import { StyledHeader, StyledNavLink, StyledNavList } from '@styles/components/Header.style';
import { StyledContainer } from '@styles/components/shared/shared';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <nav>
          <StyledNavList>
            <li>
              <StyledNavLink to={ROUTES.root}>HomeFC</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={ROUTES.homeCC}>HomeCC</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={ROUTES.settingsFC}>SettingsFC</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={ROUTES.settingsCC}>SettingsCC</StyledNavLink>
            </li>
          </StyledNavList>
        </nav>
      </StyledContainer>
    </StyledHeader>
  );
};
