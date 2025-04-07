import { Button } from '@/components/ui/button';
import { contractsPath } from '@/path';
import Link from 'next/link';
import Placeholder from '@/features/dashboard/components/placeholder';

const NotFound = () => {
  return (
    <div className='flex-1 flex'>
      <Placeholder
        label='Contract not found'
        button={
          <Button asChild variant='outline'>
            <Link href={contractsPath()}>Back to contracts</Link>
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
