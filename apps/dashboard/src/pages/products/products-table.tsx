import { ProductsQuery } from '@elpida/dashboard/hooks';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ArrayElement } from '@elpida/shared/utils';

type Product = ArrayElement<ProductsQuery['products']['data']>;

type ProductsTableProps = {
  products: Product[];
};

const columnHelper = createColumnHelper<Product>();

const columns = [
  columnHelper.accessor('id', {
    header: () => 'ID',
    cell: (product) => product.getValue(),
  }),
  columnHelper.accessor((row) => row.name, {
    id: 'name',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => 'Name',
  }),
  columnHelper.accessor('product_categories', {
    header: () => 'Categories',
    cell: (info) => (
      <>
        {info.getValue().map((category, idx) => (
          <span key={idx}>{category.category.name}</span>
        ))}
      </>
    ),
  }),
];

const ProductsTable = ({ products }: ProductsTableProps) => {
  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex-1 bg-red-400">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-gray-700 uppercase bg-stone-200  dark:bg-gray-700 dark:text-gray-400">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="text-stone-600 font-semibold">
              {headerGroup.headers.map((header) => (
                <th key={header.id} scope="col" className="py-2 px-2">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="overflow-y-auto">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
