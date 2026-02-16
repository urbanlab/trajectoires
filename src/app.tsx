import { Footer } from '@Components/footer';
import { Header } from '@Components/header';
import { AuthProvider } from '@Providers/auth';
import { BreakpointProvider } from '@Providers/breakpoint';
import { ModalProvider } from '@Providers/modal';
import { ThemeProvider } from '@Providers/theme';


import { Layout } from 'antd';

import { Outlet } from 'react-router-dom';

export default function App() {
  return (
      <ThemeProvider>
        <BreakpointProvider>
          <ModalProvider>
              <AppLayout />
          </ModalProvider>
        </BreakpointProvider>
      </ThemeProvider>
  );
}

function AppLayout() {
  return (
    <Layout className="app">
      <Header />
        <Layout.Content className="content">
          <Outlet  />
        </Layout.Content>
      <Footer />
    </Layout>
  );
}
