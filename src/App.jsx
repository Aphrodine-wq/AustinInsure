import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import ProblemSection from './components/ProblemSection';
import DamageTypes from './components/DamageTypes';
import WhatToExpect from './components/WhatToExpect';
import WhyUs from './components/WhyUs';
import ServiceArea from './components/ServiceArea';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import IntakeModal from './components/IntakeModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app-container relative">
      <Header />
      <main>
        <Hero onOpenModal={openModal} />
        <TrustSignals />
        <ProblemSection />
        <DamageTypes />
        <WhatToExpect onOpenModal={openModal} />
        <WhyUs />
        <ServiceArea />
        <FAQ />
        <LeadForm onOpenModal={openModal} />
      </main>
      <Footer />

      <IntakeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
