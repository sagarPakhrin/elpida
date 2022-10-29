export const intToString = (num: number) => {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    notation: 'compact',
    compactDisplay: 'short',
  }).format(num);
};
