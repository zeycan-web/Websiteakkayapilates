import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function WhyAkkaya() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <h1 className="mb-6">About Our Studio</h1>
            <p className="text-gray-700 mb-4">
              At Akkaya Pilates, we offer a calm and supportive environment where every session is tailored to your individual needs.
              With a background in sports science and physiotherapy, our approach is intelligent, evidence-based, and deeply mindful.
              Our mission is to help you move with confidence and awareness — improving your posture, strength, and overall quality of life.
            </p>
            <p className="text-gray-700 mb-4">
              Our studio welcomes individuals of all fitness levels to explore movement with purpose.
              Each class is small-group based, ensuring focused guidance and a truly personalized experience.
              Whether your goal is to enhance strength, improve posture, or simply feel more connected to your body, our sessions are designed to help you move intelligently and confidently.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that movement, when guided with care and awareness, is one of the most powerful ways to support long-term health and well-being.
            </p>
             <p className="text-gray-700 font-bold">
              Move better. Feel stronger. Live aware.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1728498852323-6b91113f9111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nfGVufDF8fHx8MTc2MTg5NjI3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Pilates Instructor Teaching"
              className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
