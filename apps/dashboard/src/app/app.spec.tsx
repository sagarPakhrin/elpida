import { render } from '../utils/test-utils';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Welcome to dashboard/i)).toBeTruthy();
  });
});
