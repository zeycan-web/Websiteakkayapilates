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

  const privacyPolicy = `This privacy policy explains how Akkaya Pilates collects, uses, and protects personal data.
We are committed to safeguarding your privacy and complying with GDPR / AVG regulations.
 
1. Information We Collect
 
1.1. Personal data voluntarily provided during class registration, such as name, contact details, and health information.
1.2. Attendance, progress, and feedback may be recorded to improve service quality.
 
2. Use of Information
 
2.1. Data is used for scheduling, communication, payment tracking, and ensuring safe instruction.
2.2. Health information is treated confidentially and used solely to tailor safe and effective sessions.
2.3. Contact details may be used for schedule updates, notifications, or payment reminders.
 
3. Data Protection
 
3.1. Data is protected against unauthorized access or misuse.
3.2. Personal data is stored only as long as necessary and deleted according to legal requirements.
 
4. Sharing of Information
 
4.1. Data may be shared only with instructors working under Akkaya Pilates.
4.2. No data will be shared with third parties unless legally required.
 
5. Your Rights
 
5.1. You have the right to access, correct, or delete your personal data.
5.2. Contact us to exercise these rights.
 
6. Changes
 
6.1. This privacy policy may be updated as needed. The latest version will always be available on our website.

`;

  const termsAndConditions = `1. Registration and Participation
 
1.1. By registering with Akkaya Pilates, participants agree to these terms and conditions.
1.2. Participants must be at least 18 years old.
1.3. All provided information must be accurate and complete.
 
2. Payment
 
2.1. Payments must be made before the start of each session.
2.2. Accepted payment methods: Bank transfer or cash.
2.3. Late or missing payments may result in suspension of participation rights.
 
3. Cancellation and Make-up
 
3.1. Classes must be cancelled at least 24 hours in advance; otherwise, the session will be charged.
3.2. Payments are non-refundable.
3.3. Missed sessions may be rescheduled depending on availability.
3.4. Schedule changes will be communicated in advance when possible.
 
4. Liability
 
4.1. Participation is at your own risk. Akkaya Pilates cannot be held responsible for injury, loss, or damage.
4.2. It is your responsibility to ensure that your health allows participation.
4.3. Akkaya Pilates is not liable for damages caused by improper use of equipment.
 
5. Right to Modify
 
5.1. Akkaya Pilates reserves the right to modify class times, instructors, or content when necessary.

Studio Rules

• Please arrive on time; if you are late, the session may be shortened.
• Wear clean, comfortable clothing and appropriate socks.
• Treat the equipment with care and report any damage immediately.
• Follow the instructor’s guidance and do not push beyond your limits.
• Inform the instructor of any health conditions before class.
• Taking photos, videos, or recordings is only allowed with permission.
`;

  const liabilityDisclaimer = `By participating in Akkaya Pilates classes, you acknowledge that physical activity carries inherent risks.

While classes are conducted safely, each participant is responsible for respecting their physical limits.

Any pain or discomfort must be reported to the instructor immediately.

Participation is entirely at your own risk; Akkaya Pilates cannot be held liable for injuries, discomfort, or loss.
`;

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Akkaya Pilates | All rights reserved | KVK: 98229494
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => openModal('Privacy Policy', privacyPolicy)}
              className="text-gray-400 hover:text-[#C7E8C3] transition-colors text-sm hover:cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openModal('Terms & Conditions', termsAndConditions)}
              className="text-gray-400 hover:text-[#C7E8C3] transition-colors text-sm hover:cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => openModal('Liability Disclaimer', liabilityDisclaimer)}
              className="text-gray-400 hover:text-[#C7E8C3] transition-colors text-sm hover:cursor-pointer"
            >
              Liability Disclaimer
            </button>
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
