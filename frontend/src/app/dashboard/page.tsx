// import { Suspense } from 'react';

// import Spinner from '@/components/spinner';
// import ContractUpload from '@/features/contract/components/contract-upload';
import Heading from '@/components/heading';
import { buttonVariants } from '@/components/ui/button';
import { contractsPath } from '@/path';
import Link from 'next/link';
// import ChartCard from '@/features/dashboard/components/chart-card';
// import ContractList from '@/features/contract/components/contract-list';

export function Page() {
  return (
    <div className='flex-1 flex flex-col gap-y-8'>
      <Heading title='Home' description='Welcome to your dashboard' />
      <div className='flex justify-center items-center'>
        <Link
          href={contractsPath()}
          className={buttonVariants({ variant: 'outline' })}
        >
          Go to your Contracts
        </Link>
      </div>
    </div>
  );
}

export default Page;
