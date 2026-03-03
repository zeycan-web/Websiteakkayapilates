import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Card } from './ui/card';

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const flexibleLessons = [
    {
      title: '1:1 Private Membership (Flexible)',
      content: [
        'A fully personalized journey with maximum schedule flexibility.',
        'Focus: Individual goals & specialized attention.',
        'Frequency: 4 × 50-minute sessions per month.',
        'Scheduling: On-demand — Book your sessions directly with your instructor to fit your schedule.',
      ],
      price: '€200 per month (€50 per class).',
      link: 'https://app.zenamu.com/akkayapilates?from=1772492400',
    },
    {
      title: '2:1 Duo Membership (Flexible)',
      content: [
        'Train together with personalized attention for both participants.',
        'Focus: Partner motivation & shared guidance.',
        'Frequency: 4 × 50-minute sessions per month (Once a week).',
        'Scheduling: Flexible — Coordinate session times directly with your instructor and partner.',
      ],
      price: '€120 per person / month (€30 per person / class).',
      link: 'https://app.zenamu.com/akkayapilates?from=1772492400',
    },
  ];

  const groupLessons = [
    {
      title: 'Sculpt Essential',
      content: [
        'Focus: Weekly Consistency.',
        'Frequency: 1 Group Session per week.',
        'Credits: 4 Credits / Month.',
      ],
      price: '',
      link: 'https://app.zenamu.com/akkayapilates?from=1772492400',
    },
    {
      title: 'Sculpt Power',
      content: [
        'Focus: Power & Consistency.',
        'Frequency: 2 Group Sessions per week.',
        'Credits: 8 Credits / Month.',
      ],
      price: '',
      link: 'https://app.zenamu.com/akkayapilates?from=1772492400',
    },
    {
      title: 'Sculpt Flexible',
      content: [
        'Focus: Total Freedom.',
        'Frequency: 10 Group Sessions (Use anytime).',
        'Validity: 12 Weeks.',
      ],
      price: '',
      link: 'https://app.zenamu.com/akkayapilates?from=1772492400',
    },
  ];

  const renderCard = (item: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={`relative p-8 transition-all border-l-4 border-l-[#C7E8C3] h-full flex flex-col justify-between
        ${item.popular ? 'shadow-2xl scale-105 bg-white' : 'hover:shadow-xl'}`}
      >
        <div>
          <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

          {item.content.map((line: string, idx: number) => (
            <p key={idx} className="text-gray-700 mb-3">
              {line}
            </p>
          ))}

          {item.price && (
            <p className="text-black font-bold mt-4">{item.price}</p>
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center
               px-6 py-3
               bg-[#C7E8C3] hover:bg-[#B5D9B1]
               text-gray-900
               rounded-xl
               shadow-md hover:shadow-lg
               transition-all duration-200"
          >
            Book Now
          </a>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-24 px-6"
      style={{ backgroundColor: '#f7f5ed' }}
    >
      <h1 className="text-black mb-12 text-center text-3xl font-semibold">
        Memberships & Pricing
      </h1>

      {/* FLEXIBLE */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Flexible Lessons
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {flexibleLessons.map(renderCard)}
        </div>
      </div>

      {/* GROUP */}
      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Sculpt Reformer: Group Journey
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {groupLessons.map(renderCard)}
        </div>
      </div>
    </section>
  );
}
