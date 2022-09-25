// https://juliangaramendy.dev/blog/strict-react-context
import React from 'react';

interface ContextOptions {
  errorMessage?: string;
  name?: string;
}

export const createStrictContext = <T>(options: ContextOptions = {}) => {
  const Context = React.createContext<T | undefined>(undefined);
  Context.displayName = options.name; // for DevTools

  function useContext() {
    const context = React.useContext(Context);
    if (context === undefined) {
      throw new Error(
        options.errorMessage ||
          `${options.name ?? ''} Context Provider is missing`
      );
    }
    return context;
  }

  return [Context.Provider, useContext] as [React.Provider<T>, () => T];
};
