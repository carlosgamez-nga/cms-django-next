import Link from 'next/link';
import { contractsPath, dashboardPath } from '@/path';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import ngaIcon from '@/../public/logo-h.svg';

const Header = () => {
  return (
    <nav className='supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between items-center'>
      <div className='flex items-center'>
        <Link href={dashboardPath()} className='px-4'>
          <Image src={ngaIcon} alt='NGA healtcare icon' height={48} />
        </Link>
      </div>
      <div>
        <Link
          href={contractsPath()}
          className={buttonVariants({ variant: 'secondary' })}
        >
          Go to your Contracts
        </Link>
      </div>
    </nav>
  );
};

export default Header;
