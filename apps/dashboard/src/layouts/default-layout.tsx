import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import TopNav from '../components/top-nav';

const DefaultLayout = () => {
  return (
    <div className="h-screen w-full flex bg-gray-100">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-y-auto">
        <TopNav />
        <div className="flex-1 py-8 px-3 lg:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
