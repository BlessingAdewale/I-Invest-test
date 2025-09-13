import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import { TPoll } from '@/src/mock/MockUser';

export function usePollCountdown(item: TPoll) {
  const [timeLeft, setTimeLeft] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const createdTime = dayjs(item.created_at);
      const rawDuration = item.poll_duration.toLowerCase();
      let durationInMinutes = 0;

      // Parse duration: support "3 days", "12 hours", "45 minutes"
      if (rawDuration.includes('day')) {
        const days = parseInt(rawDuration, 10);
        if (!isNaN(days)) durationInMinutes = days * 24 * 60;
      } else if (rawDuration.includes('hour')) {
        const hours = parseInt(rawDuration, 10);
        if (!isNaN(hours)) durationInMinutes = hours * 60;
      } else if (rawDuration.includes('minute')) {
        const minutes = parseInt(rawDuration, 10);
        if (!isNaN(minutes)) durationInMinutes = minutes;
      } else {
        setTimeLeft('Invalid duration');
        clearInterval(interval);
        return;
      }

      const endTime = createdTime.add(durationInMinutes, 'minute');
      const now = dayjs();
      const diff = endTime.diff(now, 'second');

      if (diff <= 0) {
        setTimeLeft('Completed');
        setIsCompleted(true);
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (60 * 60 * 24));
      const hours = Math.floor((diff % (60 * 60 * 24)) / 3600);
      const minutes = Math.floor((diff % 3600) / 60);

      let formatted = '';
      if (days > 0) formatted += `${days} day${days > 1 ? 's' : ''} `;
      if (hours > 0) formatted += `${hours} hour${hours > 1 ? 's' : ''} `;
      if (minutes > 0 || (days === 0 && hours === 0))
        formatted += `${minutes} minute${minutes !== 1 ? 's' : ''}`;

      setTimeLeft(`${formatted.trim()} left`);
      setIsCompleted(false);
    }, 1000);

    return () => clearInterval(interval);
  }, [item.created_at, item.poll_duration]);

  return { timeLeft, isCompleted };
}
