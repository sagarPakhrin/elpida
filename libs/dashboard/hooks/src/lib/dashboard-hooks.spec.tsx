import { render } from '@testing-library/react';

import DashboardHooks from './dashboard-hooks';

describe('DashboardHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardHooks />);
    expect(baseElement).toBeTruthy();
  });
});
