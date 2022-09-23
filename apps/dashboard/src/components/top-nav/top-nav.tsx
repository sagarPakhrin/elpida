import { Bars3Icon } from '@heroicons/react/24/outline';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const TopNav = () => {
  return (
    <header className="flex justify-between py-3 px-10 shadow text-gray-500">
      <div className="flex gap-4 items-center">
        <button type="button">
          <Bars3Icon className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold">Constructor</h1>
      </div>
      <div className="flex gap-4 items-center">
        <button type="button">
          <BellIcon className="h-6 w-6" />
        </button>
        <button type="button">
          <UserCircleIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default TopNav;
