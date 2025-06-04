import {
  PiHouse,
  PiFileText,
  PiUser,
  PiCaretUp,
  PiGear,
  PiSignOut,
} from 'react-icons/pi';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from './ui/sidebar';
import Link from 'next/link';
import { dashboardPath } from '@/path';
import Image from 'next/image';
import ngaLogo from '../../public/logo.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const items = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: PiHouse,
  },
  {
    title: 'Contracts',
    url: '/dashboard/contracts',
    icon: PiFileText,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader className='py-4'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <Link href={dashboardPath()} className='text-foreground'>
                <div className='flex aspect-square size-8 items-center justify-center rounded-lg'>
                  <Image src={ngaLogo} alt='NGA healtcare logo' height={32} />
                </div>
                <div className='flex flex-col gap-0.5 leading-none'>
                  <span className='font-semibold'>NGA Heatlcare</span>
                  <span className='text-xs'>Contract Management System</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Manage</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size='lg'
                  className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
                >
                  <Avatar className='h-8 w-8 rounded-lg'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='username'
                    />
                    <AvatarFallback className='rounded-lg'>JD</AvatarFallback>
                  </Avatar>{' '}
                  John Doe <PiCaretUp className='ml-auto' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
                align='end'
                sideOffset={4}
              >
                <DropdownMenuLabel className='p-0 font-normal'>
                  <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                    <Avatar className='h-8 w-8 rounded-lg'>
                      <AvatarImage
                        src='https://github.com/shadcn.png'
                        alt='username'
                      />
                      <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                    </Avatar>
                    <div className='grid flex-1 text-left text-sm leading-tight'>
                      <span className='truncate font-semibold'>John Doe</span>
                      <span className='truncate text-xs'>
                        john.doe@email.com
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <PiUser className='mr-2' size={20} /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <PiGear className='mr-2' size={20} /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PiSignOut className='mr-2' size={20} /> Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
