import Routes from '@constants/routes';
import {
  StyledBurgerButton,
  StyledBurgerLine,
  StyledNav,
  StyledNavLink,
  StyledNavList,
} from './NavMenu.style';
import { useEffect, useState } from 'react';

export const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleBurgerButtonClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 480) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledNav>
      <StyledBurgerButton $isMenuOpen={isMenuOpen} onClick={handleBurgerButtonClick}>
        <StyledBurgerLine />
        <StyledBurgerLine />
        <StyledBurgerLine />
      </StyledBurgerButton>
      <StyledNavList $isMenuOpen={isMenuOpen}>
        <li>
          <StyledNavLink to={Routes.ROOT} onClick={closeMenu}>
            HomeFC
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={Routes.HOME_CC} onClick={closeMenu}>
            HomeCC
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={Routes.SETTINGS_FC} onClick={closeMenu}>
            SettingsFC
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={Routes.SETTINGS_CC} onClick={closeMenu}>
            SettingsCC
          </StyledNavLink>
        </li>
      </StyledNavList>
    </StyledNav>
  );
};
