import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface SaleCountdownProps {
  endDate: Date;
}

const SaleCountdown = ({ endDate }: SaleCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center gap-1 text-[10px] md:text-xs font-mono">
      <div className="flex flex-col items-center bg-white/20 px-1.5 py-0.5 rounded">
        <span className="font-bold">{formatNumber(timeLeft.days)}</span>
        <span className="text-[8px] opacity-80">g</span>
      </div>
      <span className="opacity-60">:</span>
      <div className="flex flex-col items-center bg-white/20 px-1.5 py-0.5 rounded">
        <span className="font-bold">{formatNumber(timeLeft.hours)}</span>
        <span className="text-[8px] opacity-80">h</span>
      </div>
      <span className="opacity-60">:</span>
      <div className="flex flex-col items-center bg-white/20 px-1.5 py-0.5 rounded">
        <span className="font-bold">{formatNumber(timeLeft.minutes)}</span>
        <span className="text-[8px] opacity-80">m</span>
      </div>
      <span className="opacity-60">:</span>
      <div className="flex flex-col items-center bg-white/20 px-1.5 py-0.5 rounded animate-pulse">
        <span className="font-bold">{formatNumber(timeLeft.seconds)}</span>
        <span className="text-[8px] opacity-80">s</span>
      </div>
    </div>
  );
};

export default SaleCountdown;
