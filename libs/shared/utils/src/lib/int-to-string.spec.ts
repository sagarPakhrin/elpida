import { intToString } from './int-to-string';

describe('FormatCurrency', () => {
  it('should return aggregiate', () => {
    expect(intToString(2000)).toEqual('2K');
    expect(intToString(5_000_000)).toEqual('5M');
    expect(intToString(5_520_000)).toEqual('5.5M');
    expect(intToString(5_550_000)).toEqual('5.6M');
  });
});
