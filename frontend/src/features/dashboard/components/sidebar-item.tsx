'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type Props = {
  icon: React.ReactNode;
  path: string;
  label: string;
  isSidebarExpanded: boolean;
  active: boolean;
};

const SidebarItem = ({
  path,
  icon,
  isSidebarExpanded,
  label,
  active,
}: Props) => {
  return isSidebarExpanded ? (
    <li>
      <Link
        href={path}
        className={cn(
          'px-3 text-foreground flex gap-3 items-center py-2 rounded hover:bg-accent hover:text-secondary-foreground whitespace-nowrap ',
          active && 'bg-secondary text-primary '
        )}
      >
        <div>{icon}</div>
        <span>{label}</span>
      </Link>
    </li>
  ) : (
    <li>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={path}
              className={cn(
                'justify-center text-foreground flex gap-3 items-center px-2 py-2  rounded hover:bg-accent hover:text-secondary-foreground whitespace-nowrap',
                active && 'bg-secondary text-primary'
              )}
            >
              <div>{icon}</div>
            </Link>
          </TooltipTrigger>
          <TooltipContent className='z-50'>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  );
};

export default SidebarItem;
