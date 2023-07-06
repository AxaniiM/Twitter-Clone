

import './globals.css'
import NavBarWrapper from './components/navigation/NavBarWrapper';
import { ReduxWrapperProvider } from './reducers/ReduxWrapper';

export const metadata = {
  title: 'Twitter',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ReduxWrapperProvider>
      <body className='bg-[#15202b] text-white flex flex-row'>
      
        <div className='flex float-left'>
          <NavBarWrapper />
        </div>
        
          {children}
        
      </body>
      </ReduxWrapperProvider>

    </html>
  )
}