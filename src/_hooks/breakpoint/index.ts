import { BreakpointContext } from '@Providers/breakpoint';

import { useContext } from 'react';

export function useBreakpoint() {
  const ctx = useContext(BreakpointContext);

  if (!ctx) {
    throw new Error('useBreakpoint must be used inside <BreakpointProvider>');
  }
  return ctx;
}
