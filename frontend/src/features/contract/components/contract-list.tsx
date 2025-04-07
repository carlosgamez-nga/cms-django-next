import ContractItem from '@/features/contract/components/contract-item';
import { getContracts } from '@/features/contract/queries/get-contracts';

const ContractList = async () => {
  const contracts = await getContracts();

  return (
    <div className='grid gap-4 justify-center justify-items-center sm:grid-cols-1 md:grid-cols-2   lg:grid-cols-3 content-center'>
      {contracts.map((contract) => (
        <ContractItem contract={contract} key={contract.id} />
      ))}
    </div>
  );
};

export default ContractList;
