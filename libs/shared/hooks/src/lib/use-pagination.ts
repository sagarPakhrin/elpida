interface UsePaginationProps {
  total?: number;
  currentPage?: number;
  size?: number;
}

export const usePagination = (props: UsePaginationProps) => {
  const { size = 20, total = 0, currentPage = 1 } = props;
  // eslint-disable-next-line no-console
  console.log(size, total);
  // eslint-disable-next-line no-console
  console.log(currentPage);
  return [0, 0];
};
