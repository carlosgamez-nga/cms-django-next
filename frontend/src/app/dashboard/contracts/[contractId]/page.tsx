import { getContract } from '@/features/contract/queries/get-contract';
import { notFound } from 'next/navigation';
import ContractItem from '@/features/contract/components/contract-item';
import { Suspense } from 'react';
import Spinner from '@/components/spinner';
import ChartCard from '@/features/dashboard/components/chart-card';
import CodeList from '@/features/cpt-codes/components/code-list';

type ContractProps = {
  params: {
    contractId: string;
  };
};

const ContractPage = async ({ params }: ContractProps) => {
  const { contractId } = await params;
  const contract = await getContract(contractId);

  if (!contract) {
    notFound();
  }

  console.log(contract);

  return (
    <div className='flex flex-col justify-center w-full'>
      <div className='grid grid-cols-6 grid-row-2 gap-4 w-full items-start'>
        <div className='col-span-6 lg:col-span-2 lg:row-start-2'>
          <ContractItem contract={contract} isDetail />
        </div>
        <div className='col-span-6 lg:col-span-4 lg:col-start-3'>
          <CodeList />
        </div>
        <div className='col-span-6 lg:col-span-4'>
          <Suspense fallback={<Spinner />}>
            <ChartCard />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ContractPage;
