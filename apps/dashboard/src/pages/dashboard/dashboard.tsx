import { intToString } from '@elpida/shared/utils';
import {
  ArrowPathRoundedSquareIcon,
  ArrowRightIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import {
  Bar,
  BarChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { data } from './data';

const Dashboard = () => {
  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex items-center px-3 lg:px-10 py-4">
          <div className="flex-shrink-0 w-8 lg:w-14 h-8 lg:h-14 rounded-full bg-zinc-900 flex items-center justify-center">
            <ShoppingBagIcon className="text-gray-200 flex-shrink-0 h-4 lg:h-6 w-4 lg:w-6" />
          </div>
          <div className="pl-5">
            <h3 className="text-sm text-gray-700">Total Products</h3>
            <span className="text-lg lg:text-3xl font-extrabold text-gray-800">
              {data.total_products}
            </span>
          </div>
        </div>
        <div className="flex items-center px-3 lg:px-10 py-4">
          <div className="flex-shrink-0 w-8 lg:w-14 h-8 lg:h-14 rounded-full bg-zinc-900 flex items-center justify-center">
            <UserGroupIcon className="text-gray-200 flex-shrink-0 h-4 lg:h-6 w-4 lg:w-6" />
          </div>
          <div className="pl-5">
            <h3 className="text-sm text-gray-700">Total Users</h3>
            <span className="text-lg lg:text-3xl font-extrabold text-gray-800">
              {intToString(data.total_users)}
            </span>
          </div>
        </div>
        <div className="flex items-center px-3 lg:px-10 py-4">
          <div className="flex-shrink-0 w-8 lg:w-14 h-8 lg:h-14 rounded-full bg-zinc-900 flex items-center justify-center">
            <PresentationChartLineIcon className="text-gray-200 flex-shrink-0 h-4 lg:h-6 w-4 lg:w-6" />
          </div>
          <div className="pl-5">
            <h3 className="text-sm text-gray-700">Total Sales</h3>
            <span className="text-lg lg:text-3xl font-extrabold text-gray-800">
              {intToString(data.total_sales)}
            </span>
          </div>
        </div>
        <div className="flex items-center px-3 lg:px-10 py-4">
          <div className="flex-shrink-0 w-8 lg:w-14 h-8 lg:h-14 rounded-full bg-zinc-900 flex items-center justify-center">
            <ArrowPathRoundedSquareIcon className="text-gray-200 flex-shrink-0 h-4 lg:h-6 w-4 lg:w-6" />
          </div>
          <div className="pl-5">
            <h3 className="text-sm text-gray-700">Total Orders</h3>
            <span className="text-lg lg:text-3xl font-extrabold text-gray-800">
              {intToString(data.total_orders)}
            </span>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white px-8 py-10 flex justify-between items-center rounded-md">
            <div className="flex-shrink-0 w-1/3 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Weekly Sales
                </h3>
                <span className="text-sm text-red-600">- 2,4203</span>
              </div>
              <p className="mt-6 text-lg">{intToString(data.total_sales)}</p>
            </div>
            <div className="w-2/3">
              <ResponsiveContainer width="100%" height={100}>
                <LineChart data={data.sales}>
                  <Line type="monotone" dataKey="total" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white px-8 py-10 flex justify-between items-center rounded-md">
            <div className="flex-shrink-0 w-1/3 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Top Products
                </h3>
                <span className="text-sm">Top sold products this week</span>
              </div>
              <p className="mt-6 text-lg">
                {intToString(
                  data.products.reduce((sum, item) => sum + item.total, 0)
                )}
              </p>
            </div>
            <div className="w-2/3">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data.products}>
                  <XAxis dataKey="product" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="total" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="px-8 py-10">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-700">Activities</h3>
            <Link to="/dashboard">
              <ArrowRightIcon className="h-6 w-6" />
            </Link>
          </div>
          <div className="mt-4 grid grid-flow gap-4">
            {data.products.map((product, idx) => (
              <div
                key={idx}
                className="p-4 rounded-md flex justify-between items-center"
              >
                <p className="font-medium">{product.name}</p>
                <span className=" text-teal-600">
                  $ {intToString(product.total)}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="px-8 py-10">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-700">
              Weekly Website visitors
            </h3>
            <Link to="/dashboard">
              <ArrowRightIcon className="h-6 w-6" />
            </Link>
          </div>
          <div className="mt-4 grid grid-flow gap-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.products}>
                <Line type="monotone" dataKey="total" stroke="#510BF4" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
