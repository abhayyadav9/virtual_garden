import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import PlantGallery from "./components/homeComponents/PlantGallery";
import GardenLayout from "./components/OurGarden/GardenLayout";
import Vr from "./components/OurGarden/Vr";
import Subscription from "./components/services/Subscripton";
import Help from "./components/services/Help";
import Contact from "./components/services/Contact";
import Login from "./components/services/forSubcription/Login";
import Signup from "./components/services/forSubcription/Signup";
import Dashboard from "./components/services/forSubcription/adminDashboard/Dashboard";
import AdminProfile from "./components/services/forSubcription/adminDashboard/AdminProfile";
import EditProfile from "./components/services/forSubcription/adminDashboard/EditProfile";
import ProtectRoute from "./components/ProtectRoute";
import Contribution from "./components/services/forSubcription/adminDashboard/Contribution";
import Publish from "./components/services/forSubcription/adminDashboard/Publish";
import { Event } from "./components/services/Event";
import EventManagement from "./components/services/forSubcription/adminDashboard/EventMangement";
import Scan from "./components/homeComponents/Scan";

// Lazy load components
const Home = React.lazy(() => import("./components/Home"));
const SideBar = React.lazy(() => import("./components/OurGarden/SideBar"));

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <Spinner />
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="mt-14">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/garden" element={<GardenLayout />}>
                <Route path="plantgallery" element={<PlantGallery />} />
                <Route path="3dparts" element={<Vr />} />
              </Route>
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/help" element={<Help />} />
              <Route path="/event" element={<Event />} />
              <Route path="/scan-image" element={<Scan />} />


              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route path="/admin-dashboard" element={<Dashboard />}>
                <Route path="admin-profile" element={<AdminProfile />} />
                <Route path="edit-admin-profile" element={<EditProfile />} />
                <Route path="contribution" element={<Contribution />} />
                <Route path="publish" element={<Publish />} />
                <Route path="event-mangement" element={<EventManagement/>} />


              </Route>
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
