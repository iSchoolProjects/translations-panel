import React from 'react';
import classNames from 'classnames';
import Logo from '../../logo/Logo';
import Menu from '../menu/Menu';
import menu from '../menu/MenuData';
import MobileMenu from '../menu/MobileMenu';
import Toggle from '../sidebar/Toggle';

const Header = ({fixed, theme, visibility, toggleSidebar, mobileView, className, ...props}: any) => {
  const headerClass = classNames({
    'nk-header is-regular': true,
    'nk-header-fixed': fixed,
    [`is-${theme}`]: theme !== 'white' && theme !== 'light',
    [`${className}`]: className,
  });

  return (
    <div className={headerClass}>
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger mr-sm-2 d-lg-none">
            <Toggle className="nk-nav-toggle nk-quick-nav-icon" icon="menu" click={toggleSidebar} />
          </div>
          <div className="nk-header-brand">
            <Logo />
          </div>
          <div className={`nk-header-menu ml-auto ${mobileView ? 'mobile-menu' : ''}  ${visibility ? 'nk-header-active' : ''}`}>
            <div className="nk-header-mobile">
              <div className="nk-header-brand">
                <Logo />
              </div>
              <div className="nk-menu-trigger mr-n2">
                <Toggle className="nk-nav-toggle nk-quick-nav-icon" icon="arrow-left" click={toggleSidebar} />
              </div>
            </div>
            {mobileView ? <MobileMenu data={menu} sidebarToggle={toggleSidebar} mobileView={mobileView} /> : <Menu />}
          </div>
          {visibility && <div className="nk-header-overlay" onClick={toggleSidebar}></div>}
        </div>
      </div>
    </div>
  );
};
export default Header;
