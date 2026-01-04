import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>Vape Stock Dashboard</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
