import React from 'react';
import SideBar from './SideBar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <div className='row min-100vh'>
      <div className='col-3 side-bar'>
        <SideBar />
      </div>
      <div className='col-9 h-100 px-0'>
        <div className='m-4'>
          <div className='container'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
