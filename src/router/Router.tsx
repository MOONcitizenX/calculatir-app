import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Routes from '@constants/routes';

import { RootLayout } from '@components/RootLayout';
import { HomePageFC, HomePageCC } from '@pages/HomePage';
import { SettingsPageFC, SettingsPageCC } from '@pages/SettingsPage';
import { ErrorFallback } from '@components/ErrorBoundary';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={Routes.ROOT} element={<RootLayout />} errorElement={<ErrorFallback />}>
      <Route index element={<HomePageFC />} />
      <Route path={Routes.SETTINGS_FC} element={<SettingsPageFC />} />
      <Route path={Routes.HOME_CC} element={<HomePageCC />} />
      <Route path={Routes.SETTINGS_CC} element={<SettingsPageCC />} />
      <Route path={Routes.WILDCARD} element={<ErrorFallback />} />
    </Route>
  )
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
