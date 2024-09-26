import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { useUser } from '@/components/contexts/useContext';

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content area for the selected section */}
      <div className="ml-24 md:ml-44 w-full">
        {/* Conditional greeting based on user's gender */}
      
        {/* Outlet will render the child routes like PlantGallery */}
        <Outlet />
      </div>

      
    </div>
  );
};

export default Dashboard;
