import React, {useEffect, useLayoutEffect, useState} from 'react';
import Header from '../layout/header/Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({children}: Props) => {
  //Sidebar
  const [visibility, setVisibility] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [themeState] = useState({
    main: 'default',
    header: 'white',
    skin: 'light',
  });

  useEffect(() => {
    viewChange();
  }, []);

  // Stops scrolling on overlay
  useLayoutEffect(() => {
    if (visibility) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    }
    if (!visibility) {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  }, [visibility]);

  //Adds classes to body
  useEffect(() => {
    document.body.className = `nk-body bg-lighter npc-invest has-touch nk-nio-theme ${themeState.skin === 'dark' ? 'dark-mode' : ''}`;
  }, [themeState, visibility]);

  // function to toggle sidebar
  const toggleSidebar = (e: any) => {
    e.preventDefault();
    if (!visibility) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  // function to change the design view under 1200 px
  const viewChange = () => {
    if (window.innerWidth < 992) {
      setMobileView(true);
    } else {
      setMobileView(false);
      setVisibility(false);
    }
  };
  window.addEventListener('load', viewChange);
  window.addEventListener('resize', viewChange);

  return (
    <React.Fragment>
      {/*<Head title="Loading" />*/}
      <div className="nk-app-root">
        <div className="nk-wrap">
          <Header visibility={visibility} toggleSidebar={toggleSidebar} mobileView={mobileView} theme={themeState.header} fixed={true} />
          {/*<Pages />*/}
          {children}
          {/*<Footer />*/}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
