import { motion } from 'motion/react';
import { Button } from './ui/button';
import heroImage from 'figma:asset/099d44bddcc50ab9cbd9bfa5a0e547465fc2fbe4.png';
import logo from 'figma:asset/74bcb0c56279e3764dde34e8ba60b7020e6d4068.png';

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pilates Reformer Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Logo in top left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-6 left-6 z-20 md:top-10 md:left-10"
      >
        <img
          src={logo}
          alt="Akkaya Pilates Logo"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* LOGO will be here*/}
          
          <p className="text-white/95 max-w-2xl mx-auto text-5xl mb-4 italic">
            Designed to move you
          </p>
          <p className="text-white/95 max-w-2xl mx-auto text-5xl mb-4 italic">
            Body • Mind • Life
          </p>
          <p className="text-white/95 mb-10 max-w-2xl mx-auto text-lg">
           Welcome to Akkaya Pilates — a Reformer Pilates studio located in the heart of Enschede, the Netherlands.
Here, fitness is redefined through mindful, personalised movement- combining the precision of Pilates with the science of physiotherapy.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-[#C7E8C3] hover:bg-[#B5D9B1] text-gray-900 shadow-lg hover:shadow-xl transition-all"
          >
            Join Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
