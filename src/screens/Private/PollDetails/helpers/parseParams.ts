import { TPollTemplate, TResponseOption } from '..';
import { TabType } from '../components/PollTabs';

export function parseSelectedPollParam(selectedPoll?: string): {
  poll: TPollTemplate | null;
  tab: TabType;
} {
  if (!selectedPoll) return { poll: null, tab: 'Residence' };

  try {
    const parsed = JSON.parse(selectedPoll);

    const formattedResponses: TResponseOption[] = Array.isArray(
      parsed.responseOptions
    )
      ? parsed.responseOptions.map((value: string, idx: number) => ({
          id: `${Date.now()}-${idx}`,
          value,
        }))
      : [];

    const poll: TPollTemplate = {
      ...parsed,
      responseOptions: formattedResponses,
    };

    const tab: TabType =
      parsed.voterEligibity === 'excos only' ? 'Executives' : 'Residence';

    return { poll, tab };
  } catch (e) {
    console.warn('Invalid poll data passed in params:', e);
    return { poll: null, tab: 'Residence' };
  }
}
