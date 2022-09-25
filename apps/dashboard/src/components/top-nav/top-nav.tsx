import { Bars3Icon } from '@heroicons/react/24/outline';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useUiContext } from '../../context/ui-context';

const TopNav = () => {
  const { toggleSidebar } = useUiContext();

  return (
    <header className="flex justify-between py-3 px-10 shadow text-gray-500 bg-white sticky z-20">
      <div className="flex gap-4 items-center">
        <button type="button" onClick={() => toggleSidebar()}>
          <Bars3Icon className="h-6 w-6" />
        </button>
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
