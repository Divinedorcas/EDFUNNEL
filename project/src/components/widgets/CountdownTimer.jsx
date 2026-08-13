import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && interval === 'days' && timeLeft.days === 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2">
        <div className="bg-primary text-white font-bold text-2xl md:text-3xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg shadow-inner">
          {timeLeft[interval].toString().padStart(2, '0')}
        </div>
        <span className="text-xs uppercase mt-1 font-semibold text-gray-500">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-2xl font-bold text-red-600">Registration Closed</span>
      )}
    </div>
  );
}
