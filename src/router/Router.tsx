import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ROUTES from '@constants/routes';

import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage';
import { RootLayout } from '@components/RootLayout/RootLayout';
import { HomePageFC } from '@pages/HomePage/HomePageFC';
import { SettingsPageFC } from '@pages/SettingsPage/SettingsPageFC';
import { HomePageCC } from '@pages/HomePage/HomePageCC';
import { SettingsPageCC } from '@pages/SettingsPage/SettingsPageCC';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.root} element={<RootLayout />}>
      <Route index element={<HomePageFC />} />
      <Route path={ROUTES.settingsFC} element={<SettingsPageFC />} />
      <Route path={ROUTES.homeCC} element={<HomePageCC />} />
      <Route path={ROUTES.settingsCC} element={<SettingsPageCC />} />
      <Route path={ROUTES.notFound} element={<NotFoundPage />} />
      <Route path={ROUTES.wildCard} element={<Navigate to={ROUTES.notFound} />} />
    </Route>
  )
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
