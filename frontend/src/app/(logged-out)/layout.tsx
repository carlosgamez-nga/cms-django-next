import Gradient from '@/components/gradient';

type Props = {
  children?: React.ReactNode;
};

const LoggetOutLayout = ({ children }: Props) => {
  return (
    <>
      <div className='flex flex-col gap-4 min-h-screen items-center justify-center p-24'>
        {children}
      </div>

      <Gradient />
    </>
  );
};

export default LoggetOutLayout;
