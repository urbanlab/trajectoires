import { ProtectedRoute } from '@Components/protectedRoute';
import { UserRole } from '@Domains/users/type';
import { PageMenu } from '@PagesProtected/menu';
import { PageLogin } from '@PagesPublic/login';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import App from '../app';
import { pageIntro } from './global';
export type UserRoleNavigation = {
  [key in UserRole.Référent | UserRole.Collectivité]: {
    label: string;
    path: string;
  }[];
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        index: true,
        element: <Navigate to={pageIntro.path} replace />,
      },
      // PROTECTED
    { path: 'menu',
      element: (
        <ProtectedRoute>
          <PageMenu/>
        </ProtectedRoute>
      )},
      // PUBLIC
    ],
  },
  {
    path: 'login',
    element: <PageLogin />,
  },
]);
