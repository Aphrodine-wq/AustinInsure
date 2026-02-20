import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InsuranceClaims from './components/InsuranceClaims';

// Optimize loading times drastically by lazy loading below-the-fold components
const TrustSignals = lazy(() => import('./components/TrustSignals'));
const ProblemSection = lazy(() => import('./components/ProblemSection'));
const DamageTypes = lazy(() => import('./components/DamageTypes'));
const WhatToExpect = lazy(() => import('./components/WhatToExpect'));
const WhyUs = lazy(() => import('./components/WhyUs'));
const ServiceArea = lazy(() => import('./components/ServiceArea'));
const ProjectGallery = lazy(() => import('./components/ProjectGallery'));
const FAQ = lazy(() => import('./components/FAQ'));
const LeadForm = lazy(() => import('./components/LeadForm'));
const Footer = lazy(() => import('./components/Footer'));
const IntakeModal = lazy(() => import('./components/IntakeModal'));
const MobileStickyCTA = lazy(() => import('./components/MobileStickyCTA'));

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // A minimal fallback to show while the chunk loads
  const renderLoader = () => (
    <div className="flex justify-center items-center py-12">
      <span className="loader" style={{ borderColor: 'var(--color-primary)', borderBottomColor: 'transparent', width: '30px', height: '30px' }}></span>
    </div>
  );

  return (
    <div className="app-container relative">
      <Header />
      <main>
        {/* Above the fold components load immediately */}
        <section className="bg-white">
          <Hero onOpenModal={openModal} />
        </section>

        <InsuranceClaims />

        <Suspense fallback={renderLoader()}>
          <section className="bg-slate">
            <TrustSignals />
          </section>

          <section className="bg-white">
            <ProblemSection onOpenModal={openModal} />
          </section>

          <section className="bg-slate">
            <DamageTypes />
          </section>

          <section className="bg-white">
            <WhatToExpect onOpenModal={openModal} />
          </section>

          <section className="bg-slate">
            <WhyUs onOpenModal={openModal} />
          </section>

          <section className="bg-white">
            <ServiceArea />
          </section>

          <section className="bg-slate">
            <ProjectGallery />
          </section>

          <section className="bg-white">
            <FAQ onOpenModal={openModal} />
          </section>

          <section className="bg-slate">
            <LeadForm onOpenModal={openModal} />
          </section>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <IntakeModal isOpen={isModalOpen} onClose={closeModal} />
        <MobileStickyCTA onOpenModal={openModal} />
      </Suspense>
    </div>
  );
}

export default App;
