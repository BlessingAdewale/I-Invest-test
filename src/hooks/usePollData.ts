import { useMemo, useState } from 'react';

import { useUser } from '@/src/hooks/useUser';

import { usePollCountdown } from '../screens/Private/Polls/helper/pollCountDown';

export const usePollData = (id: string) => {
  const { allPolls, allUsers } = useUser();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const poll = useMemo(() => allPolls.find((p) => p.id === id), [id, allPolls]);

  const [responses, setResponses] = useState(
    () =>
      poll?.response.map((resp, index) => ({
        id: `${resp.option}-${index}`,
        option: resp.option,
        votes: resp.votes ?? 0,
        voters: resp.voters ?? [],
      })) || []
  );

  const { timeLeft, isCompleted } = usePollCountdown(poll!);

  const totalVotes = responses.reduce((sum, item) => sum + item.votes, 0);
  const hasVoted = selectedIndex !== null || isCompleted;

  const handleVote = (index: number) => {
    if (!hasVoted && !isCompleted) {
      const updated = responses.map((item, i) =>
        i === index ? { ...item, votes: item.votes + 1 } : item
      );
      setResponses(updated);
      setSelectedIndex(index);
    }
  };

  const allVoters = poll?.voters || [];
  const voterProfiles = allUsers.filter((u) =>
    allVoters.some((v) => typeof v === 'object' && v.id === u.id)
  );

  return {
    poll,
    responses,
    selectedIndex,
    handleVote,
    totalVotes,
    hasVoted,
    isCompleted,
    timeLeft,
    voterProfiles,
  };
};
