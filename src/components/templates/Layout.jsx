import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className={'min-h-screen w-screen'}>
      <Outlet />
    </div>
  );
};
