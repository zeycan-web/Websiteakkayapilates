import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Card } from './ui/card';

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

const prices = [
  { 
    type: '1:1 Private Sessions', 
    price: '€50 per class', 
    people: '',
    description: [
      'A fully personalized program including 4 × 50-minute sessions per month.',
      'Choose from Reformer, Cadillac, Chair, Mat, or Spine Corrector classes.',
      '€200 per month.'
    ]
  },
  { 
    type: '2:1 Duo Sessions', 
    price: '€30 per class', 
    people: '(2 people, once a week)',
    description: [
      'Train together in a supportive setting — with personalized attention for both participants.',
      'Includes 4 × 50-minute sessions per month.',
      'Choose from Reformer, Cadillac, Chair, Mat, or Spine Corrector classes.',
      '€120 per person / per month',
    ]
  },
  { 
    type: '3:1 Small Group Sessions', 
    price: '€25 per class', 
    people: '(3 people, once a week)',
    description: [
      'Train together in a calm and supportive environment — with personalized guidance and focused attention for every participant.',
      'Includes 4 × 50-minute sessions per month.',
      'Choose from Reformer, Cadillac, Chair, Mat, or Spine Corrector classes.',
      '€100 per person / per month',
    ]
  },
];


  return (
  <section ref={ref} className="py-24 px-6" style={{ backgroundColor: '#f7f5ed' }}>
    <div className="mt-4">
          <h1 className="text-black mb-8 text-center">Memberships & Pricing</h1>
        </div>
 <div className="grid md:grid-cols-3 gap-8">
  {prices.map((item, index) => (
    <motion.div
      key={item.type}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-8 hover:shadow-xl transition-shadow border-l-4 border-l-[#C7E8C3] h-full flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{item.type}</h2>
          <p className="text-gray-500 mb-2">{item.people}</p>
          {item.description.map((para, idx) => (
            <p key={idx} className="text-gray-700 mb-3 whitespace-pre-line">{para}</p>
          ))}
        </div>
        <p className="text-2xl font-bold text-primary">{item.price}</p>

      </Card>
    </motion.div>
  ))}
</div>
</section>
  );
}
