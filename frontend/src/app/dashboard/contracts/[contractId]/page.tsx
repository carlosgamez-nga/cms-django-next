import { getContract } from '@/features/contract/queries/get-contract';
import { notFound } from 'next/navigation';
import ContractItem from '@/features/contract/components/contract-item';

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

  return (
    <div className='flex justify-center w-full'>
      <ContractItem contract={contract} isDetail />
    </div>
  );
};

export default ContractPage;
