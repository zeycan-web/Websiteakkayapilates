import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function WhatIsReformer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1754258166780-c20a15d43798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwcmVmb3JtZXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYxODc5ODMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Reformer Pilates Equipment"
              className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-6">What is Reformer Pilates</h2>
            <p className="text-gray-700">
              Reformer Pilates is a mindful, full-body workout designed to enhance strength, flexibility, and overall well-being.
              It goes beyond traditional exercise — combining awareness, control, and balance to create harmony between body and mind.
              Perfect for anyone seeking a holistic approach to movement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
