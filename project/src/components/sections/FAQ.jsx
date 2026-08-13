import SectionTitle from '../ui/SectionTitle';
import Accordion from '../ui/Accordion';


export default function FAQ() {
  const faqItems = [
    {
      question: "Is this medical treatment?",
      answer: "No, this program is purely educational coaching. It is designed to help you understand the lifestyle, nutritional, and psychological factors related to men's health. It is not a substitute for professional medical diagnosis or treatment."
    },
    {
      question: "Who should attend?",
      answer: "Any man experiencing performance issues, men over 35 looking for preventive knowledge, or anyone wanting to improve their vitality, energy, and confidence."
    },
    {
      question: "How do I join?",
      answer: "Simply fill out the registration form on this page and complete your payment of ₦15,000. You will receive a confirmation email with the private YouTube Live link."
    },
    {
      question: "Will there be a replay?",
      answer: "Yes, all registered participants will receive access to the recording for a limited time after the live sessions conclude."
    },
    {
      question: "How long are the sessions?",
      answer: "Each day consists of approximately 90-120 minutes of coaching, including dedicated time for Q&A."
    },
    {
      question: "Can I ask questions?",
      answer: "Absolutely. There will be live Q&A segments where you can ask questions directly. You can also submit questions confidentially before the session."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about the program."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion items={faqItems} />
        </div>

      </div>
    </section>
  );
}
