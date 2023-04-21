import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Routes from '@constants/routes';

import { RootLayout } from '@components/RootLayout/RootLayout';
import { HomePageFC } from '@pages/HomePage/HomePageFC';
import { SettingsPageFC } from '@pages/SettingsPage/SettingsPageFC';
import { HomePageCC } from '@pages/HomePage/HomePageCC';
import { SettingsPageCC } from '@pages/SettingsPage/SettingsPageCC';
import { ErrorFallback } from '@components/ErrorBoundary/ErrorFallback';

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
