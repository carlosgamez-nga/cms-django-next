import React from 'react';
import Sidebar from '../../features/dashboard/components/sidebar';
import TopbarContainer from '../../features/dashboard/components/topbar-container';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex overflow-hidden'>
      <Sidebar />
      <main className='w-full overflow-x-auto bg-secondary/20'>
        <TopbarContainer />
        <div className='flex-1 sm:h-screen overflow-x-hidden overflow-y-auto py-18 py-24 px-8 flex flex-col'>
          {children}
        </div>
      </main>
    </div>
  );
};

export default layout;
