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
import Embed, {
  Bodhi,
  Chamomile,
  Neem,
  Tulsi,
  Turmeric,
} from "./components/homeComponents/Embed";
import PublishCard from "./components/homeComponents/PublishCard";
import View3D from "./components/OurGarden/View3D";
import ConsultDoctor from "./components/consultant/CunsultDoctor";
import OurExpert from "./components/consultant/OurExpert";
import AllBook from "./components/eLibrary/AllBook";
import LatestBook from "./components/eLibrary/LatestBook";

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

                <Route path="bodhi" element={<Bodhi />} />
                <Route path="neem" element={<Neem />} />
                <Route path="chamomile" element={<Chamomile />} />
                <Route path="tulsi" element={<Tulsi />} />
                <Route path="turmeric" element={<Turmeric />} />
              </Route>

              <Route path="/view-3d/:id" element={<View3D />} />
              <Route path="/publish" element={<PublishCard />} />

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
                <Route path="event-mangement" element={<EventManagement />} />
              </Route>

              {/* consultant */}
              <Route path="/consult-doctor" element={<ConsultDoctor />} />
              <Route path="/our-expert" element={<OurExpert />} />


            {/* e liabrary */}
            <Route path="/all-book" element={<AllBook />} />
            <Route path="/latest-book" element={<LatestBook />} />



            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
