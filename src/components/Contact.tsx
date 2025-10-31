import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

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
          <h2 className="text-center mb-6 text-[20px]">Get in Touch</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for class inquiries, schedules, or bookings.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C7E8C3] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <p className="text-gray-700">info@akkayapilates.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C7E8C3] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <p className="text-gray-700">Penninkstraat 16</p>
                  <p className="text-gray-700">7521BT Enschede</p>
                </div>
              </div>


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
