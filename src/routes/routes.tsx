import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpCard from '../components/app/landing/signup/SignUpCard';
import DashboardPage from '../pages/app/DashboardPage';
import Landing from '../pages/LandingPage';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        /* * APP ROUTES */
        <Route path="/app/dashboard" element={<DashboardPage />} />
        <Route path="/app/signup" element={<SignUpCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
