import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Card } from './ui/card';

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const prices = [
    { type: 'Private Session', price: '€50 per class', people: '1 person' },
    { type: 'Duo Session', price: '€30 per class', people: '2 people (per person)' },
    { type: 'Trio Session', price: '€25 per class', people: '3 people (per person)' },
  ];

  const rules = [
    'Arrive on time for your session',
    'Wear clean, comfortable clothes and grip socks',
    'Treat equipment with care',
    'Follow instructor guidance and respect your limits',
    'Inform the instructor about any health conditions',
    'Photos or videos only with permission',
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-16 text-[20px]">Prices & Studio Rules</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Pricing */}
            <div>
              <h3 className="mb-6 text-center">Pricing</h3>
              <div className="space-y-4">
                {prices.map((item, index) => (
                  <motion.div
                    key={item.type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#C7E8C3]">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-500 text-sm">{item.people}</p>
                        </div>
                        <p>{item.price}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Studio Rules */}
            <div>
              <h3 className="mb-6 text-center">Studio Rules</h3>
              <Card className="p-6 bg-gray-50">
                <ul className="space-y-3">
                  {rules.map((rule, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-[#C7E8C3] mr-3">•</span>
                      <span className="text-gray-700">{rule}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
