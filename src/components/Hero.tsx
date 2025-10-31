import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

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
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1754258166816-0075fe0132ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwcmVmb3JtZXIlMjBzdHVkaW98ZW58MXx8fHwxNzYxODk2MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Pilates Reformer Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* LOGO will be here*/}
          
          <h1 className="text-white mb-8 text-[36px]">
            Akkaya Pilates
          </h1>
          <p className="text-white/95 mb-10 max-w-2xl mx-auto text-lg">
            Welcome to Akkaya Pilates — a boutique Reformer Pilates studio in the heart of Enschede, the Netherlands.
            Here, fitness is redefined through personalized, mindful movement blending the precision of Pilates with the science of physiotherapy.
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
