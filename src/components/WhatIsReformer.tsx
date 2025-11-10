import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import image from '../assets/05.jpg';

export function WhatIsReformer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6" style={{ backgroundColor: '#f7f5ed' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <ImageWithFallback
              src={image}
              alt="Reformer Pilates Equipment"
              className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-6">What is Reformer Pilates</h1>
            <p className="text-gray-700">
              Reformer pilates is designed for anyone looking to enhance core strength, flexibility, and overall well-being. It is a perfect fit for those who prioritize a holistic approach to fitness.
              Reformer pilates is more than just exercise, it’s a mindful way to strengthen the body, improve flexibility, and enhance overall well-being.
              Perfect for those who seek balance, awareness, and a holistic approach to movement.
              Reformer pilates goes beyond physical training. It’s about mindful movement, inner balance, and a stronger connection between body and mind.
              Designed for those who value awareness and a holistic sense of well-being.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
