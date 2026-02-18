import { ReactNode, createContext } from 'react';

import { ConfigProvider, ThemeConfig } from 'antd';

export type ThemeContextType = {};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const primaryColor = '#000';
  const secondaryColor = '#4d4d4';

  const themeConfig: ThemeConfig = {
    token: {
      colorPrimary: '#e60028',
      colorText: primaryColor,
      colorLinkHover: primaryColor,
      colorTextSecondary: secondaryColor,
      colorTextDescription: secondaryColor,
      colorLink: secondaryColor,
      colorBgLayout: 'var(--bg)',

      fontFamily: 'Jost, sans-serif',
    },
    components: {
      Form: {
        labelFontSize: 18,        // Taille de la police du label
        labelColor: '#333333',    // Couleur du label
        labelHeight: 32,          // Hauteur de la ligne
      },
      Typography: {
        margin: 0,
        padding: 0,
        paddingXXS: 0,
        paddingXS: 0,
        paddingSM: 0,
        paddingMD: 0,
        paddingLG: 0,
        paddingXL: 0,
      },
      Collapse: {
        padding: 16,
        paddingXXS: 16,
        paddingXS: 16,
        paddingSM: 16,
        paddingMD: 16,
        paddingLG: 16,
        paddingXL: 16,
      },
      Select: {
        optionSelectedBg: 'transparent',
        optionSelectedColor: secondaryColor,
      },
    },
  };

  return (
    <ThemeContext.Provider value={{}}>
      <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
}
