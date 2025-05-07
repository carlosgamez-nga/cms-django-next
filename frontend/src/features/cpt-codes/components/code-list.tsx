import { codes } from '@/../db.json';

import { Badge } from '@/components/ui/badge';

const CodeList = () => {
  return (
    <div className='supports-backdrop-blur:bg-background/60 backdrop-blur w-full flex justify-start gap-4 items-center lg:my-2 flex-wrap mx-2'>
      <div className='flex justify-start gap-1 lg:gap-2 items-center flex-wrap'>
        <span className='text-sm font-bold'>CPT Codes:</span>
        {codes.map((code) => (
          <Badge key={code.code} variant='secondary'>
            {code.code}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default CodeList;
