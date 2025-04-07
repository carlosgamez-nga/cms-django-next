import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';

export function DashboardBreadcrumb() {
  return (
    <Breadcrumb className='my-6'>
      <BreadcrumbList className='bg-accent w-fit rounded-full py-1 px-3'>
        <BreadcrumbItem>
          <BreadcrumbLink href='/dashboard'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className='text-foreground' />
        {/* <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-1'>
              <BreadcrumbEllipsis className='h-4 w-4' />
              <span className='sr-only'>Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='start'>
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem> */}
        {/* <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href='/contracts'>Contracts</BreadcrumbLink>
        </BreadcrumbItem> */}
        {/* <BreadcrumbSeparator /> */}
        <BreadcrumbItem>
          <BreadcrumbPage>Contract</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
