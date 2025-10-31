import { useState } from 'react';
import { LegalModal } from './LegalModal';
import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const [modalContent, setModalContent] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({
    isOpen: false,
    title: '',
    content: '',
  });

  const openModal = (title: string, content: string) => {
    setModalContent({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalContent({ ...modalContent, isOpen: false });
  };

  const privacyPolicy = `Privacy Policy

Last updated: October 31, 2025

At Akkaya Pilates, we value your privacy and are committed to protecting your personal information.

Information We Collect
We may collect personal information such as your name, email address, phone number, and health-related information necessary for providing our services.

How We Use Your Information
- To provide and maintain our Pilates services
- To communicate with you about bookings and schedules
- To improve our services and customer experience
- To comply with legal obligations

Data Security
We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.

Your Rights
You have the right to:
- Access your personal data
- Request correction of your data
- Request deletion of your data
- Withdraw consent at any time

Contact Us
If you have any questions about this Privacy Policy, please contact us at info@akkayapilates.com.`;

  const termsAndConditions = `Terms & Conditions

Last updated: October 31, 2025

Welcome to Akkaya Pilates. By booking and participating in our classes, you agree to these terms and conditions.

Bookings and Payments
- All bookings must be made in advance
- Payment is required at the time of booking
- Prices are subject to change with prior notice

Cancellation Policy
- Cancellations must be made at least 24 hours in advance
- Late cancellations may result in a fee
- No-shows will be charged the full session price

Studio Rules
- Arrive on time for your scheduled session
- Wear appropriate workout attire and grip socks
- Respect the equipment and studio space
- Follow all instructor guidance
- Inform us of any health conditions or injuries

Health and Safety
- Participants must be physically able to engage in Pilates exercises
- We reserve the right to refuse service if we believe participation poses a health risk
- Always consult your physician before starting any new exercise program

Liability
Please refer to our Liability Disclaimer for detailed information about our liability limitations.

Changes to Terms
We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms.

Contact
For questions regarding these terms, please contact info@akkayapilates.com.`;

  const liabilityDisclaimer = `Liability Disclaimer

Last updated: October 31, 2025

Important Notice: Please read this disclaimer carefully before participating in any Akkaya Pilates classes or activities.

Assumption of Risk
By participating in Reformer Pilates classes at Akkaya Pilates, you acknowledge that:
- Physical exercise involves inherent risks of injury
- You are voluntarily participating in these activities
- You assume all risks associated with participation

Health Representation
You represent that:
- You are in good physical condition
- You have no medical condition that would prevent safe participation
- You will immediately inform the instructor of any discomfort or pain during class
- You have consulted with a physician if you have any health concerns

Limitation of Liability
To the maximum extent permitted by law:
- Akkaya Pilates shall not be liable for any injuries or damages sustained during or as a result of participation in our classes
- This includes injuries resulting from equipment use, instructor guidance, or facility conditions
- Our liability is limited to the amount paid for the specific class or session

Medical Advice Disclaimer
- The instruction and guidance provided are not a substitute for medical advice
- We do not diagnose, treat, or cure any medical conditions
- Always consult appropriate medical professionals for health concerns

Equipment and Facility Use
- Participants must use equipment properly and follow all safety instructions
- Misuse of equipment may result in injury for which we are not liable
- Participants are responsible for their personal belongings

Photography and Media
- By attending classes, you consent to being photographed or recorded for promotional purposes unless you explicitly opt out

Indemnification
You agree to indemnify and hold harmless Akkaya Pilates, its instructors, and staff from any claims, damages, or expenses arising from your participation.

Contact
For questions about this disclaimer, contact info@akkayapilates.com.

By participating in our classes, you acknowledge that you have read, understood, and agree to this Liability Disclaimer.`;

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Akkaya Pilates | All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => openModal('Privacy Policy', privacyPolicy)}
              className="text-gray-400 hover:text-[#C7E8C3] transition-colors text-sm"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openModal('Terms & Conditions', termsAndConditions)}
              className="text-gray-400 hover:text-[#C7E8C3] transition-colors text-sm"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => openModal('Liability Disclaimer', liabilityDisclaimer)}
              className="text-gray-400 hover:text-[#C7E8C3] transition-colors text-sm"
            >
              Liability Disclaimer
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#C7E8C3] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#C7E8C3] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={modalContent.isOpen}
        onClose={closeModal}
        title={modalContent.title}
        content={modalContent.content}
      />
    </footer>
  );
}
