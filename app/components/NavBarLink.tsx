import { ReactElement } from 'react';
import { SvgIconProps } from '@mui/material';

interface SidebarLinkProps {
  text: string;
  Icon: React.ElementType<SvgIconProps>;
}

function SidebarLink({ text, Icon }: SidebarLinkProps): ReactElement {
  return (
    <div className="flex items-center cursor-pointer rounded-full hover:bg-blue-100 
                  hover:text-blue-500 transition-colors duration-100 ease-out">
    <div className='p-5'>
      <Icon />
      </div>
      <h2 className="font-bold text-xl mr-5">{text}</h2>
    </div>
  );
}

export default SidebarLink;
