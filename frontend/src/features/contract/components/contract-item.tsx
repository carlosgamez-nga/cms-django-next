'use client';

import { contractPath } from '../../../path';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Contract } from './types';
import { clsx } from 'clsx';
import { Button } from '@/components/ui/button';

type ContractProps = {
  contract: Contract;
  isDetail?: boolean;
};

const ContractItem = ({ contract, isDetail }: ContractProps) => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this contract?')) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contracts/${id}`,
        {
          method: 'DELETE',
        }
      );
      if (res.status === 204) {
        router.push('/dashboard/contracts');
      }
    }
  };

  // const handleEdit = () => {};

  return (
    <div
      className={clsx('w-full flex gap-x-1', {
        'max-w-[450px]': !isDetail,
        'max-w-[580px]': isDetail,
      })}
    >
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>{contract.payer_name}</CardTitle>
          <CardDescription>{contract.state}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='line-clamp-3'>{contract.description}</p>
          <div className='text-sm text-muted-foreground'>
            <div className='flex justify-between'>
              <span>Effective Date:</span> {contract.effective_date}
            </div>
            <div className='flex justify-between'>
              <span>Uploaded:</span> {contract.uploaded_at}
            </div>
          </div>
        </CardContent>
        {isDetail ? (
          <CardFooter className='justify-end flex gap-2'>
            {/* <Button variant='outline'>Edit</Button> */}
            <Button
              variant='destructive'
              onClick={() => handleDelete(contract.id.toString())}
            >
              Delete
            </Button>
          </CardFooter>
        ) : (
          <CardFooter>
            <Link
              href={contractPath(contract.id)}
              className='text-sm underline'
            >
              Show Contract
            </Link>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ContractItem;
