import Header from '@/components/header';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex overflow-hidden'>
      <Header />
      <main className='min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col'>
        {children}
      </main>
    </div>
  );
};

export default layout;
