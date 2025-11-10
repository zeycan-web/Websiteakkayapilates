import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Facebook, Instagram, Mail, MapPin, MessageCircleMore } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

const contactItems = [
  {
    icon: Mail,
    href: "mailto:info@akkayapilates.com",
    label: "info@akkayapilates.com",
  },
  {
    icon: MapPin,
    href: "https://www.google.com/maps?q=Penninkstraat+16,+7521+BT+Enschede",
    label: "Penninkstraat 16, 7521BT Enschede",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/akkaya.pilates/",
    label: "Instagram: @akkaya.pilates",
  },
  {
    icon: MessageCircleMore,
    href: "https://wa.me/31651102668",
    label: "Whatsapp: 0651102668",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', surname: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-center mb-6">Get in Touch</h1>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for class inquiries, schedules, or bookings.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">

            {contactItems.map(({ icon: Icon, href, label }, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-[#C7E8C3] p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-gray-800" />
                </div>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#006400] transition-colors duration-300 hover:underline"
                >
                  {label}
                </a>
              </div>
            ))}

            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758599879666-d5a66a02225e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWxsbmVzcyUyMHN0dWRpbyUyMGludGVyaW9yfGVufDF8fHx8MTc2MTg5NjI3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Studio Interior"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { ImageWithFallback } from './figma/ImageWithFallback';
