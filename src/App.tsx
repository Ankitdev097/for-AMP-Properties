/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { CostComparison } from './components/CostComparison';
import { WorkflowSection } from './components/Workflow';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { EmailModal } from './components/EmailModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contactEmail = "ankit@agentbydesign.in";

  return (
    <div className="min-h-screen bg-black font-sans text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <PainPoints />
      <Solution />
      <CostComparison />
      <WorkflowSection />
      <Testimonials />
      <FAQ />
      <Footer />
      
      <EmailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        email={contactEmail} 
      />
    </div>
  );
}

