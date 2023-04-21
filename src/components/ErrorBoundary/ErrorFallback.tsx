import Routes from '@constants/routes';

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
      <a href={Routes.ROOT}>Try navigating back to Home Page</a>
    </div>
  );
};
