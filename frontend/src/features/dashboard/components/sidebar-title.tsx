import Image from 'next/image';
import ngaIconH from '../../../../public/logo-h.svg';
import ngaIcon from '../../../../public/logo.svg';

const SidebarTitle = ({
  isSidebarExpanded,
}: {
  isSidebarExpanded: boolean;
}) => {
  return (
    <h4 className='flex items-center mb-6 mx-4'>
      {isSidebarExpanded ? (
        <Image src={ngaIconH} alt='NGA healtcare icon' height={48} />
      ) : (
        <Image src={ngaIcon} alt='NGA healtcare icon' height={48} />
      )}
    </h4>
  );
};

export default SidebarTitle;
