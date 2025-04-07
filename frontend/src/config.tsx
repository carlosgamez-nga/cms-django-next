import { usePathname } from 'next/navigation';
import { PiHouse, PiFiles } from 'react-icons/pi';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, href: string) {
    return pathname === href;
  }

  return [
    {
      name: 'Home',
      href: '/dashboard',
      icon: <PiHouse size={24} />,
      active: isNavItemActive(pathname, '/dashboard'),
    },
    {
      name: 'contracts',
      href: '/dashboard/contracts',
      icon: <PiFiles size={24} />,
      active: isNavItemActive(pathname, '/dashboard/contracts'),
    },
  ];
};
