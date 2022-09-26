export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-us', {
    currency: currency,
    style: 'currency',
  }).format(amount);
};
