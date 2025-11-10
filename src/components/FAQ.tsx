import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const faqs = [
    {
      question: 'Is reformer pilates suitable for beginners?',
      answer: 'Absolutely. Every class is designed to adapt to your level — whether it’s your first time or you already have experience. The small-group setting allows for personal guidance in every session.',
    },
    {
      question: 'Do I need to be flexible or strong before starting?',
      answer: 'Not at all. Reformer Pilates helps you build flexibility and strength progressively. You simply start where your body is today, and we move from there.',
    },
    {
      question: 'Can I join if I have back or shoulder discomfort?',
      answer: 'Yes. Classes are guided by physiotherapy-based principles to ensure safe movement. Reformer Pilates can help relieve tension and improve posture when performed correctly.',
    },
    {
      question: 'Is reformer pilates helpful for scoliosis?',
      answer: 'Yes. Targeted, one-sided and balancing exercises help improve symmetry, mobility, and postural awareness without forcing the spine. Each session is adjusted to your unique body needs.',
    },
    {
      question: 'Can athletes benefit from reformer pilates?',
      answer: 'Definitely. Pilates helps enhance core stability, coordination, and muscle balance — improving performance while reducing injury risk for runners, cyclists, and other athletes.',
    },
    {
      question: 'Is reformer pilates safe during pregnancy or after birth?',
      answer: 'Yes, with proper guidance. Sessions focus on posture, breathing, and safe core activation, including diastasis recti (abdominal separation) support for pre- and postnatal clients.',
    },
    {
      question: 'How often should I do reformer pilates?',
      answer: 'For best results, 2–3 sessions per week are ideal. Consistency helps your body adapt, strengthen, and develop better movement patterns.',
    },
    {
      question: 'How long is a typical session?',
      answer: 'Each class lasts around 50–55 minutes, including setup, warm-up, and full-body conditioning.',
    },
    {
      question: 'What should I wear to class?',
      answer: 'Comfortable, form-fitting activewear works best. Grip socks are recommended for stability and hygiene on the Reformer.',
    },
    {
      question: 'Do I need to bring anything with me?',
      answer: 'Just yourself! Mats, props, and equipment are provided. You may bring a small towel and water bottle if you wish.',
    },
    {
      question: 'Is reformer pilates suitable for older adults?',
      answer: 'Yes. It’s a low-impact, joint-friendly form of exercise that supports mobility, balance, and confidence at any age.',
    },
    {
      question: 'Can I do reformer pilates after an injury?',
      answer: 'Yes, depending on your recovery stage. Because sessions are physiotherapy-informed, exercises can be modified safely to support your rehabilitation and gradual return to movement.',
    },
    {
      question: 'Will reformer pilates help me lose weight?',
      answer: 'While it’s not a cardio workout, Pilates tones muscles, improves posture, and enhances metabolism. When combined with balanced nutrition and an active lifestyle, it supports long-term body composition change.',
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6" style={{ backgroundColor: '#f7f5ed' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-center mb-12">Frequently Asked Questions</h1>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-[#C7E8C3] hover:cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
