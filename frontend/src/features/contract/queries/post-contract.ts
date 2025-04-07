import { Contract } from '../components/types';

export const uploadContract = async (contract: Contract) => {
  if (!contract || typeof contract !== 'object') {
    throw new Error('Invalid contract data');
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contracts`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contract),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to upload contract: ${response.statusText}`);
  }

  return await response.json();
};
