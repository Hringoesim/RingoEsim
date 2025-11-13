import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import LandingPage from '@/pages/LandingPage';
import Index from '@/pages/Index';
import HowItWorks from '@/pages/HowItWorks';
import Pricing from '@/pages/Pricing';
import FAQ from '@/pages/FAQ';
import Contact from '@/pages/Contact';
import DeviceCompatibility from '@/pages/DeviceCompatibility';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import VerifyEmail from '@/pages/VerifyEmail';
import Dashboard from '@/pages/Dashboard';
import WaitlistConfirmed from '@/pages/WaitlistConfirmed';
import Unsubscribe from '@/pages/Unsubscribe';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import CookiePolicy from '@/pages/CookiePolicy';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'how-it-works',
        element: <HowItWorks />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'device-compatibility',
        element: <DeviceCompatibility />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'reset-password/:token',
        element: <ResetPassword />,
      },
      {
        path: 'verify-email',
        element: <VerifyEmail />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'waitlist/confirmed',
        element: <WaitlistConfirmed />,
      },
      {
        path: 'unsubscribe',
        element: <Unsubscribe />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'terms-of-service',
        element: <TermsOfService />,
      },
      {
        path: 'cookie-policy',
        element: <CookiePolicy />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);