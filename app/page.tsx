import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import UseCases from '@/components/UseCases';
import ImpactSimulation from '@/components/ImpactSimulation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Solutions />
      <UseCases />
      <ImpactSimulation />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
