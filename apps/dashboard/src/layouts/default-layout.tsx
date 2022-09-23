import { Outlet } from 'react-router-dom';
import TopNav from '../components/top-nav';

const DefaultLayout = () => {
  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col">
      <TopNav />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
