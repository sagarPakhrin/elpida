import { render } from '../utils/test-utils';

import App from './app';

jest.mock('recharts', () => ({
  Bar: () => <div>Chart</div>,
  BarChart: () => <div>Chart</div>,
  Legend: () => <div>Chart</div>,
  Line: () => <div>Chart</div>,
  LineChart: () => <div>Chart</div>,
  ResponsiveContainer: () => <div>Chart</div>,
  Tooltip: () => <div>Chart</div>,
  XAxis: () => <div>Chart</div>,
  YAxis: () => <div>Chart</div>,
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Total sales/i)).toBeTruthy();
  });
});
