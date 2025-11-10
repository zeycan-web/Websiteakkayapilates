import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import image from '../assets/04.jpg';

export function WhoIs() {
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
            <h1 className="mb-6">Who is Gokce Akkaya?</h1>
            <p className="text-gray-700 mb-4">
              Movement has always been my passion. Today, as a physiotherapist and pilates instructor, I combine that passion with science to help others discover their body’s full potential.
 
              With an academic background in sports science and international physiotherapy, I approach pilates not just as exercise, but as a science-based practice tailored to the body’s anatomical and biomechanical needs.
            </p>
            <p className="text-gray-700 mb-4">
            Since 2011, I have worked with clients and students using reformer, cadillac, chair, and barrel equipment.
             My expertise includes spinal health, prenatal pilates, and scoliosis-specific movement, guiding individuals to improve posture, mobility, and overall quality of life.
 
             To broaden my knowledge, I’ve trained with internationally recognized Balanced Body master instructors and participated in Pilates on Tour Istanbul.
             These experiences, together with my clinical background, allow me to offer a comprehensive, safe, and personalized approach in every session.
            </p>
             <p className="text-gray-700">
              My mission is not only to teach movement, but to help people understand their bodies, gain strength with confidence, and improve their quality of life through mindful, intelligent exercise.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
