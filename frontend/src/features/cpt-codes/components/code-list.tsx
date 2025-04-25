import { codes } from '@/../db.json';

import { Badge } from '@/components/ui/badge';

const CodeList = () => {
  return (
    <div className='supports-backdrop-blur:bg-background/60 flex bg-background/95 backdrop-blur w-full justify-start gap-1 mx-8'>
      {codes.map((code) => (
        <Badge key={code.code}>{code.code}</Badge>
      ))}
    </div>
  );
};

export default CodeList;
