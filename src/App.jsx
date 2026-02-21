import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import InsuranceClaims from './components/InsuranceClaims';

// Optimize loading times by lazy loading below-the-fold components
const TrustSignals = lazy(() => import('./components/TrustSignals'));
const ProblemSection = lazy(() => import('./components/ProblemSection'));
const DamageTypes = lazy(() => import('./components/DamageTypes'));
const WhatToExpect = lazy(() => import('./components/WhatToExpect'));
const WhyUs = lazy(() => import('./components/WhyUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const BlogPreview = lazy(() => import('./components/BlogPreview'));
const ServiceArea = lazy(() => import('./components/ServiceArea'));
const ProjectGallery = lazy(() => import('./components/ProjectGallery'));
const FAQ = lazy(() => import('./components/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));
const IntakeModal = lazy(() => import('./components/IntakeModal'));
const MobileStickyCTA = lazy(() => import('./components/MobileStickyCTA'));
const BlogList = lazy(() => import('./components/BlogList'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const ServicesPage = lazy(() => import('./components/ServicesPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const ServiceAreaPage = lazy(() => import('./components/ServiceAreaPage'));

function HomePage({ openModal }) {
  const renderLoader = () => (
    <div className="flex justify-center items-center py-12">
      <span className="loader" style={{ borderColor: 'var(--color-primary)', borderBottomColor: 'transparent', width: '30px', height: '30px' }}></span>
    </div>
  );

  return (
    <>
      <main>
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

          <Testimonials />

          <BlogPreview />

          <section className="bg-white">
            <ServiceArea />
          </section>

          <section className="bg-slate">
            <ProjectGallery />
          </section>

          <section className="bg-white">
            <FAQ onOpenModal={openModal} />
          </section>

          <FinalCTA onOpenModal={openModal} />
        </Suspense>
      </main>
    </>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const renderLoader = () => (
    <div className="flex justify-center items-center py-12" style={{ minHeight: '50vh' }}>
      <span className="loader" style={{ borderColor: 'var(--color-primary)', borderBottomColor: 'transparent', width: '30px', height: '30px' }}></span>
    </div>
  );

  return (
    <div className="app-container relative">
      <Header />

      <Suspense fallback={renderLoader()}>
        <Routes>
          <Route path="/" element={<HomePage openModal={openModal} />} />
          <Route path="/services" element={<ServicesPage onOpenModal={openModal} />} />
          <Route path="/about" element={<AboutPage onOpenModal={openModal} />} />
          <Route path="/contact" element={<ContactPage onOpenModal={openModal} />} />
          <Route path="/service-area" element={<ServiceAreaPage onOpenModal={openModal} />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
        <IntakeModal isOpen={isModalOpen} onClose={closeModal} />
        <MobileStickyCTA onOpenModal={openModal} />
      </Suspense>
    </div>
  );
}

export default App;
