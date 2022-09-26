import { formatCurrency } from './format-currency';

describe('FormatCurrency', () => {
  it('should work', () => {
    expect(formatCurrency(200)).toEqual('$200.00');
  });
});
