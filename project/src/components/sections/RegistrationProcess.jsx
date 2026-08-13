import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Timeline from '../ui/Timeline';
import Button from '../ui/Button';

const PAYSTACK_URL = 'https://paystack.shop/pay/2-daysmenreset';

export default function RegistrationProcess() {
  const [isLoading, setIsLoading] = useState(false);

  const handlePaymentClick = () => {
    setIsLoading(true);
    window.location.href = PAYSTACK_URL;
  };

  const steps = [
    { title: "Step 1: Make Payment", description: "Click the proceed button below to securely pay the registration fee." },
    { title: "Step 2: Confirmation", description: "Receive your payment confirmation." },
    { title: "Step 3: Get Access", description: "Send a message to receive the private YouTube link before we start." },
  ];

  return (
    <section id="register" className="py-20 bg-background border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Secure Your Spot"
          subtitle="Follow these simple steps to join the program."
        />

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
            <h3 className="text-3xl font-bold text-primary mb-10">How it works</h3>

            <div className="w-full mb-10">
              <Timeline items={steps} />
            </div>

            <Button
              size="lg"
              className="w-full md:w-2/3 text-lg py-4 relative"
              onClick={handlePaymentClick}
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mx-auto"
                />
              ) : (
                'Proceed to Payment'
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
