import { Contract } from '../components/types';

export const getContracts = async (): Promise<Contract[]> => {
  // testing only
  await new Promise((res) => setTimeout(res, 2000));

  // return new Promise((res) => {
  //   res(contracts);
  // });

  // const res = await fetch('http://localhost:4000/contracts');
  const res = await fetch(`${process.env.BACKEND_URL}/api/contracts/`);

  return res.json();
};
