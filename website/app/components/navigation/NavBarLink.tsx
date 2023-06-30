import { ReactElement } from 'react';
import { SvgIconProps } from '@mui/material';

interface SidebarLinkProps {
  text: string;
  Icon: React.ElementType<SvgIconProps>;
}

function NavBarLink({ text, Icon }: SidebarLinkProps): ReactElement {
  return (
    <div className="flex items-center cursor-pointer rounded-full hover:bg-[#2c3640] 
                  transition-colors duration-100 ease-out w-full">
      <div className='p-4'>
        <Icon className='text-2xl' />
      </div>
      <h2 className="text-[21px]">{text}</h2>
    </div>
  );
}

export default NavBarLink;
