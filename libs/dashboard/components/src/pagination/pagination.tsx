import { usePagination } from '@elpida/shared/hooks';
interface PaginationProps {
  total?: number;
  size?: number;
}
export const Pagination = (props: PaginationProps) => {
  const { total = 0, size = 20 } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [a] = usePagination({
    total,
    size,
    currentPage: 1,
  });
  return <div>sagar</div>;
};
