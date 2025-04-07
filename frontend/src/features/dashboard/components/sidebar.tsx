'use client';

import { useState, Fragment } from 'react';
import { cn } from '@/lib/utils';

import { Separator } from '@/components/ui/separator';
import { NavItems } from '../../../config';
import { PiCaretLeft, PiCaretRight } from 'react-icons/pi';
import SidebarTitle from './sidebar-title';
import SidebarItem from './sidebar-item';
import { SidebarUser } from './sidebar-user';

// This is sample data.
const data = {
  user: {
    name: 'Dianna',
    email: 'dianna@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
};

const Sidebar = () => {
  const navItems = NavItems();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <aside>
      <nav
        className={cn(
          isSidebarExpanded ? 'w-[270px] px-6 ' : 'w-[68px]',
          'flex flex-col h-full z-40  border-r py-6 transition-all duration-500 ease-in-out transform'
        )}
      >
        <header id='sidebar-header'>
          <SidebarTitle isSidebarExpanded={isSidebarExpanded} />
        </header>
        <Separator />
        <ul
          id='sidebar-content'
          className={cn(
            !isSidebarExpanded && 'items-center',
            'flex flex-col pt-6 gap-2 grow'
          )}
        >
          {navItems.map((item, idx) => {
            {
              return (
                <Fragment key={idx}>
                  <div className='space-y-1'>
                    <SidebarItem
                      label={item.name}
                      icon={item.icon}
                      path={item.href}
                      active={item.active}
                      isSidebarExpanded={isSidebarExpanded}
                    />
                  </div>
                </Fragment>
              );
            }
          })}
        </ul>
        <footer id='sidebar-footer' className='flex justify-center'>
          <SidebarUser user={data.user} isSidebarExpanded={isSidebarExpanded} />
        </footer>
      </nav>
      <div className='mt-7 relative z-50'>
        <button
          type='button'
          className='absolute bottom-32 right-[-12px] flex h-6 w-6 items-center justify-center border border-muted-foreground/20 rounded-full bg-accent shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'
          onClick={toggleSidebar}
        >
          {isSidebarExpanded ? (
            <PiCaretLeft size={16} className='stroke-foreground' />
          ) : (
            <PiCaretRight size={16} className='stroke-foreground' />
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
