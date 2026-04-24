import { ProtectedRoute } from '@Components/protectedRoute'
import { PageMenu } from '@PagesProtected/menu'
import {InfoSalaries} from '@PagesProtected/info-salaries'
import FicheEntreprise from '@PagesProtected/fiche-entreprise'
import {Enquete} from '@PagesProtected/enquete'
import { PageLogin } from '@PagesPublic/login'
import { EncryptPage } from '@PagesPublic/encrypt'
import { Navigate, createBrowserRouter } from 'react-router-dom'

import App from '../app'
import { pageIntro } from './global'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        index: true,
        element: <Navigate to={pageIntro.path} replace />
      },
      // PROTECTED
      { path: 'menu',
        element: (
          <ProtectedRoute>
            <PageMenu/>
          </ProtectedRoute>
        )},
      { path: 'informations-salaries',
        element: (
          <ProtectedRoute>
            <InfoSalaries/>
          </ProtectedRoute>
        )},
      { path: 'enquete',
        element: (
          <ProtectedRoute>
            <Enquete/>
          </ProtectedRoute>
        )},
      { path: 'fiche-entreprise',
        element: (
          <ProtectedRoute>
            <FicheEntreprise/>
          </ProtectedRoute>
        )}
      // PUBLIC
    ]
  },
  {
    path: 'login',
    element: <PageLogin />
  },
  {
    path: 'encrypt',
    element: <EncryptPage />
  }
])
