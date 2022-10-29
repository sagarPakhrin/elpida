import { classNames } from '@elpida/shared/utils';
import {
  ArrowRightOnRectangleIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import { useUiContext } from '../../context/ui-context';

interface Link {
  to: string;
  label: string;
  icon: React.ReactNode;
}

/* TODO: ! Fix animation with framermotion  */

const Sidebar = () => {
  const { sidebarOpen: open } = useUiContext();

  const links: Link[] = [
    {
      to: '/dashboard',
      label: 'Dashboard',
      icon: <PresentationChartBarIcon className="flex-shrink-0 h-6 w-6" />,
    },
    {
      to: '/products',
      label: 'Products',
      icon: <ShoppingBagIcon className="flex-shrink-0 h-6 w-6" />,
    },
  ];

  return (
    <aside
      className={classNames(
        'py-3 h-full border-r bg-teal-900  text-gray-300  border-gray-200 flex flex-col items-center justify-between',
        'transition-all duration-300',
        open ? 'w-64' : 'w-20'
      )}
    >
      <div className="w-full">
        <a
          href="/"
          className={classNames(
            'flex mx-4 px-4 justify-center text-2xl pb-2 font-semibold text-gray-500 text-center',
            'border-b border-gray-200'
          )}
        >
          <span className={classNames(open ? '' : 'w-4 overflow-hidden')}>
            Constructor
          </span>
        </a>
        <div className="pt-6 px-1 space-y-1">
          {links.map(({ label, icon, to }) => (
            <NavLink
              to={to}
              key={to}
              className={({ isActive }) =>
                classNames(
                  'flex py-3 px-4 rounded hover:bg-teal-800 gap-3 text-sm items-center',
                  open ? '' : 'justify-center',
                  isActive ? 'bg-teal-800' : ''
                )
              }
            >
              {icon}
              {open && label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full">
        <button
          className={classNames(
            'w-full flex py-3 px-4 rounded gap-3 text-sm items-center hover:bg-teal-800',
            open ? '' : 'justify-center'
          )}
        >
          <ArrowRightOnRectangleIcon className="flex-shrink=0 h-6 w-6" />
          {open && 'Logout'}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
