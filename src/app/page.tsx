import dynamic from 'next/dynamic';
import Hero from '../../components/Hero';
import ScrollAnimations from '../../components/ScrollAnimations';

const APAutomation = dynamic(() => import('../../components/APAutomation'));
const VendorManagement = dynamic(() => import('../../components/VendorManagement'));
const IntegrationSync = dynamic(() => import('../../components/IntegrationSync'));
const Testimonials = dynamic(() => import('../../components/Testimonials'));
const Footer = dynamic(() => import('../../components/Footer'));

export default function Home() {
  return (
    <main className="w-full bg-white">
      <ScrollAnimations />
      <Hero />
      <APAutomation />
      <VendorManagement />
      <IntegrationSync />
      <Testimonials />
      <Footer />
    </main>
  );
}
