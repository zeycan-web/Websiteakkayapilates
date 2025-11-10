import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { Card } from './ui/card';

export function WhoIsItFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const audience = [
    {
      title: '💻 Office Workers',
      description: `Long hours at a desk can cause tight hips, rounded shoulders, and lower-back tension.
Reformer Pilates helps restore posture, ease stiffness, and bring balance back to your body — so you move freely again after long workdays.`
    },
    {
      title: '🏃‍♀️ Athletes / Runners / Cyclists',
      description: `Designed to complement endurance and performance training.
Reformer Pilates helps improve muscle balance, coordination, and recovery, enhancing overall efficiency and preventing overuse injuries.`
    },
    {
      title: '💫 Rehabilitation & Transition Phases',
      description: `Perfect for those returning to exercise after injury, surgery, or a long break.
Physiotherapy-informed sessions focus on stability, control, and gradual progression — rebuilding strength safely and effectively.`
    },
    {
      title: '🧍‍♀️ Active Adults',
      description: `For those who love to move but want to do it smarter.
Reformer Pilates enhances strength, flexibility, and control — helping you prevent injuries and move efficiently in daily life.`
    },
    {
      title: '🦴 Individuals with Postural Imbalances or Mild Discomfort',
      description: `Ideal for anyone experiencing stiffness, neck or back tightness, or asymmetrical posture.
The Reformer offers controlled, joint-friendly movement that improves balance and mobility without strain.`
    },
    {
      title: '🤰 Pregnant & Postnatal Clients',
      description: `Tailored sessions to support your body during and after pregnancy.
We focus on safe core engagement, posture, and breathing — including guidance for those with abdominal separation (diastasis recti).
Movements help relieve tension, improve circulation, and promote comfort through every stage of pregnancy and recovery.`
    },
    {
      title: '🧓 Seniors',
      description: `Gentle yet effective, Reformer Pilates supports healthy joints, improves coordination, and enhances confidence in movement.
A perfect way to stay active, strong, and independent at any age.`
    },
    {
      title: '🌱 Anyone Seeking Mindful Movement',
      description: `Reformer Pilates is suitable for all levels, offering a calm, focused environment to reconnect with your body, build awareness, and move with intention.`
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-center mb-16">Who is it for?</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {audience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`}>
                    <Card className="p-4 hover:shadow-lg transition-shadow border-l-4 border-l-[#C7E8C3]">
                      <AccordionTrigger className="text-left font-semibold hover:text-[#C7E8C3] hover:cursor-pointer">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 mt-2 whitespace-pre-line">
                        {item.description}
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
