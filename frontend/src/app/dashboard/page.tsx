import { Suspense } from 'react';

import Spinner from '@/components/ui/spinner';
import ContractUpload from '@/features/contract/components/contract-upload';
import Heading from '@/features/dashboard/components/heading';
import ChartCard from '@/features/dashboard/components/chart-card';
import ContractList from '@/features/contract/components/contract-list';

export function Page() {
  return (
    <div className='flex-1 flex flex-col gap-y-8'>
      <Heading title='Home' description='Your dashboard' />
      <Suspense fallback={<Spinner />}>
        <ChartCard />
      </Suspense>

      <ContractUpload title='Your latest contracts:' />

      <Suspense fallback={<Spinner />}>
        <ContractList />
      </Suspense>
    </div>
  );
}

export default Page;
