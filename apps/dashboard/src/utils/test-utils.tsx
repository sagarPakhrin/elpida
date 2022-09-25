import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { UiProvider } from '../context/ui-context';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MemoryRouter>
      <UiProvider>{children}</UiProvider>
    </MemoryRouter>
  );
};

const customRender = (ui: ReactElement, options: RenderOptions = {}) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render, render as rtlRender };
