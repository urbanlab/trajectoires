import { router } from '@Router/router';
import '@Styles/app.css';
import React from 'react';
import '@Styles/antd/typography.css';
import 'antd/dist/reset.css';
import {theme } from 'antd';

const { useToken } = theme;




import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from '@Providers/auth';
import { BreakpointProvider } from '@Providers/breakpoint';
import { ModalProvider } from '@Providers/modal';
import { ThemeProvider } from '@Providers/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
