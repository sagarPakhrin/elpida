import { useProductsQuery } from '@elpida/dashboard/hooks';
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from '@heroicons/react/20/solid';
import ProductsTable from './products-table';
import { Pagination } from '@elpida/dashboard/components';

const Products = () => {
  const { data } = useProductsQuery();

  return (
    <div className="h-full overflow-y-auto">
      <div className="flex justify-between">
        <h1 className="text-xl lg:text-3xl">Products</h1>
        <div className="flex gap-4">
          <button
            type="button"
            className="text-xs flex items-center gap-3 border border-gray-600 rounded px-4 py-1"
            data-testid="import-btn"
          >
            Import
            <ArrowUpTrayIcon className="h-4 w-4 text-black" />
          </button>
          <button
            type="button"
            className="text-xs flex items-center gap-3 border border-gray-600 rounded px-4 py-1"
            data-testid="export-btn"
          >
            Export
            <ArrowDownTrayIcon className="h-4 w-4 text-black" />
          </button>
        </div>
      </div>
      <div className="mt-8">
        <ProductsTable products={data?.products.data ?? []} />
        <Pagination total={data?.products.meta.total} size={10} />
      </div>
    </div>
  );
};

export default Products;
