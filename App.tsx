
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { FarmProvider } from './context/FarmContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Breeds from './pages/Identify';
import Health from './pages/Health';
import Feed from './pages/Feed';
import FodderLibrary from './pages/FodderLibrary';
import Medicines from './pages/Medicines';
import Guides from './pages/Guides';
import FarmDashboard from './pages/FarmDashboard';
import CalendarPage from './pages/Calendar';
import Login from './pages/Login';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { initCapacitorPlugins } from './utils/notifications';

const App: React.FC = () => {
  useEffect(() => {
    initCapacitorPlugins();
  }, []);

  return (
    <LanguageProvider>
      <AuthProvider>
        <FarmProvider>
          <HashRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/breeds" element={<Breeds />} />
                <Route path="/health" element={<Health />} />
                <Route path="/medicines" element={<Medicines />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/fodder" element={<FodderLibrary />} />
                <Route path="/guides" element={<Guides />} />
                <Route path="/farm" element={<FarmDashboard />} />
              </Routes>
            </Layout>
          </HashRouter>
        </FarmProvider>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;
