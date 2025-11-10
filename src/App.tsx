import { Hero } from './components/Hero';
import { WhatIsReformer } from './components/WhatIsReformer';
import { WhyAkkaya } from './components/WhyAkkaya';
import { WhoIs } from './components/WhoIs';
import { WhoIsItFor } from './components/WhoIsItFor';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIsReformer />
      <WhyAkkaya />
      <WhoIs />
      <WhoIsItFor />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
      <Toaster />
    </div>
  );
}
