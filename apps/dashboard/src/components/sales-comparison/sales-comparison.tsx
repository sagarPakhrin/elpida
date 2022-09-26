import { formatCurrency } from '@elpida/shared/utils';
import { classNames } from '@elpida/ui';
import { ArrowUpIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

type Base = {
  name: string;
  today: number;
  yesterday: number;
};

interface SalesComparisonProps<T> {
  data: T[];
}

const SalesComparison = <T extends Base>({ data }: SalesComparisonProps<T>) => {
  const todays_total = data.reduce((sum, { today }) => sum + today, 0);
  const yesterdays_total = data.reduce(
    (sum, { yesterday }) => sum + yesterday,
    0
  );

  const growth_rate = parseFloat(
    (((todays_total - yesterdays_total) / yesterdays_total) * 100).toFixed(2)
  ); // not sure if this is the correct formula

  return (
    <div>
      <div className="flex items-center gap-4">
        <h3 className="text-sm font-extrabold text-gray-500">Total sales</h3>
        <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800">
          {formatCurrency(todays_total)}
        </h3>
        <div
          className={classNames(
            'flex gap-4 items-center font-medium',
            growth_rate > 0 ? 'text-green-500' : 'text-red-500'
          )}
        >
          <ArrowUpIcon
            className={classNames(
              'h-4 w-4 transition-all',
              growth_rate > 0 ? '' : 'rotate-180'
            )}
          />
          {growth_rate}
        </div>
      </div>
    </div>
  );
};

export default SalesComparison;
