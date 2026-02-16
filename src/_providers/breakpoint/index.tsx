import { ReactNode, createContext } from 'react';

import { Grid } from 'antd';

export interface BreakpointContextType {
  screens: ReturnType<typeof Grid.useBreakpoint>;
  isDesktop: boolean;
}

export const BreakpointContext = createContext<BreakpointContextType | undefined>(
  undefined,
);

interface BreakpointProviderProps {
  children: ReactNode;
}

export const BreakpointProvider = ({ children }: BreakpointProviderProps) => {
  const screens = Grid.useBreakpoint();

  const value: BreakpointContextType = {
    screens,
    isDesktop: screens.lg === true, // 992px
  };

  return (
    <BreakpointContext.Provider value={value}>{children}</BreakpointContext.Provider>
  );
};
