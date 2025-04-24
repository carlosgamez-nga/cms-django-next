import { Suspense } from 'react';

import Spinner from '@/components/spinner';
import ContractUpload from '@/features/contract/components/contract-upload';
import Heading from '@/features/dashboard/components/heading';
import ContractList from '@/features/contract/components/contract-list';

const ContractsPage = () => {
  return (
    <div className='flex-1 flex flex-col gap-y-8'>
      <Heading
        title='Contracts'
        description='All your contracts at one place'
      />

      <ContractUpload title='Add a new contract' />
      <Suspense fallback={<Spinner />}>
        <ContractList />
      </Suspense>
    </div>
  );
};

export default ContractsPage;
