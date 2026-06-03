import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SeoServices from './pages/services/SeoServices';
import FacebookAds from './pages/services/FacebookAds';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import WebsiteDesign from './pages/services/WebsiteDesign';
import GraphicDesign from './pages/services/GraphicDesign';
import VideoEditing from './pages/services/VideoEditing';
import GoogleAds from './pages/services/GoogleAds';
import ErpSoftware from './pages/services/ErpSoftware';
import Contact from './pages/Contact';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/seo-services" element={<SeoServices />} />
            <Route path="services/facebook-ads" element={<FacebookAds />} />
            <Route path="services/social-media-management" element={<SocialMediaManagement />} />
            <Route path="services/website-design" element={<WebsiteDesign />} />
            <Route path="services/graphic-design" element={<GraphicDesign />} />
            <Route path="services/video-editing" element={<VideoEditing />} />
            <Route path="services/google-ads" element={<GoogleAds />} />
            <Route path="services/erp-software" element={<ErpSoftware />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
