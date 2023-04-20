import { StyledNavLink } from '@components/NavMenu/NavMenu.style';
import ROUTES from '@constants/routes';

export const ErrorFallback = () => {
  return (
    <div
      role="alert"
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p style={{ color: 'red', fontSize: '24px' }}>Oops, Something went wrong...</p>
      <StyledNavLink to={ROUTES.root}>Try navigating back to Home Page</StyledNavLink>
    </div>
  );
};
