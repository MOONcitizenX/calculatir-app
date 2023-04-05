import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header/Header';
import { StyledContainer } from '@styles/components/shared/shared';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <StyledContainer>
          <Outlet />
        </StyledContainer>
      </main>
    </>
  );
};
