import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const PAYSTACK_URL = 'https://paystack.shop/pay/2-daysmenreset';

const isLocalDev =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';

const API_URL = isLocalDev
  ? 'http://localhost/EDFUNNEL/backend/email.php'
  : '/edfunnel/backend/email.php';

export default function RegistrationForm({ onSuccess }) {
  const [submitError, setSubmitError] = useState(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    setSubmitError(null);

    let responseData;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      try {
        responseData = await response.json();
      } catch {
        responseData = { status: 'error', message: 'Unexpected server response. Please try again.' };
      }

      if (!response.ok || responseData?.status !== 'success') {
        // Backend returned an error, but we still proceed to Paystack
        console.warn('[EDFUNNEL] Registration email failed:', responseData?.message);
      } else {
        // ── Success ──────────────────────────────────────────────────────────
        console.log('[EDFUNNEL] Registration successful:', responseData.message);
      }

      if (onSuccess) onSuccess(data);
      window.location.href = PAYSTACK_URL;

    } catch (networkError) {
      // Network/connection failure — server unreachable
      console.warn('[EDFUNNEL] Network error:', networkError.message);

      // Still proceed to Paystack on network error
      if (onSuccess) onSuccess(data);
      window.location.href = PAYSTACK_URL;
    }
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            {...register('fullName', { required: 'Full name is required' })}
            className={inputClasses}
            placeholder="John Doe"
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
            })}
            className={inputClasses}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            {...register('phone', { required: 'Phone number is required' })}
            className={inputClasses}
            placeholder="+234..."
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
          <input
            type="number"
            {...register('age', {
              required: 'Age is required',
              min: { value: 18, message: 'Must be 18 or older' },
            })}
            className={inputClasses}
            placeholder="e.g. 45"
          />
          {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
          <input
            {...register('state', { required: 'State is required' })}
            className={inputClasses}
            placeholder="e.g. Lagos"
          />
          {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
          <input
            {...register('occupation')}
            className={inputClasses}
            placeholder="e.g. Engineer"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Have you experienced ED? *
        </label>
        <div className="space-y-2">
          {['Yes', 'No', 'Prefer not to say'].map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="radio"
                id={`ed-${option}`}
                value={option}
                {...register('experiencedED', { required: 'Please select an option' })}
                className="w-4 h-4 text-accent focus:ring-accent border-gray-300"
              />
              <label htmlFor={`ed-${option}`} className="ml-3 text-gray-700">
                {option}
              </label>
            </div>
          ))}
        </div>
        {errors.experiencedED && (
          <p className="mt-1 text-sm text-red-600">{errors.experiencedED.message}</p>
        )}
      </div>

      {/* ── Backend error message ───────────────────────────────────────── */}
      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          <strong className="font-semibold">Registration failed: </strong>
          {submitError}
        </motion.div>
      )}

      <div className="pt-4">
        <Button
          type="submit"
          className="w-full text-lg py-4 relative"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
            />
          ) : (
            'Proceed to Payment'
          )}
        </Button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Your information is 100% confidential and secure.
        </p>
      </div>
    </form>
  );
}
