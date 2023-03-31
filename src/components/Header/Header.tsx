import ROUTES from '@constants/routes';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.root}>HomeFC</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.homeCC}>HomeCC</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.settingsFC}>SettingsFC</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.settingsCC}>SettingsCC</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
