import { Outlet } from 'react-router-dom';
import { SideBar, TopBar } from './index';

const Layout = ({ isSideNavOpen, toggleNav }) => {
  return (
    <>
      <TopBar isOpen={isSideNavOpen} toggleSideNav={toggleNav} />
      <main>
        <SideBar isOpen={isSideNavOpen} toggleSideNav={toggleNav} />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;