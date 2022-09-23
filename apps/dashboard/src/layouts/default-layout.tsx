import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import TopNav from '../components/top-nav';

const DefaultLayout = () => {
  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col">
      <TopNav />
      <main className="flex-1 flex">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
