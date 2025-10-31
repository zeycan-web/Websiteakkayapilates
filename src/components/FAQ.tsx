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
      question: 'Is Reformer Pilates suitable for beginners?',
      answer: 'Absolutely — every class is adapted to your level for a safe, personalized experience.',
    },
    {
      question: 'Do I need to be flexible or strong before starting?',
      answer: 'Not at all. You start where you are, and strength and flexibility grow over time.',
    },
    {
      question: 'Can I join if I have back or shoulder discomfort?',
      answer: 'Yes, classes are guided with physiotherapy principles to ensure safe movement.',
    },
    {
      question: 'Is Reformer Pilates helpful during pregnancy?',
      answer: 'Yes, with proper guidance focusing on posture, breathing, and safe core activation.',
    },
    {
      question: 'How often should I do Reformer Pilates?',
      answer: '2–3 sessions per week are ideal to see progress and build long-term strength.',
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-12 text-[20px]">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-[#C7E8C3]">
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
