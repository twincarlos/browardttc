import { useGetEventGroupsByTournamentEventIdQuery } from '@/store/apis/eventGroupApi';
import { useAppSelector } from '../useAppSelector';
import { selectAllEventGroupsByTournamentEventId } from '@/store/slices/eventGroupSlice';

export default function useEventGroups(tournamentEventId: string) {
  const { isLoading, error } = useGetEventGroupsByTournamentEventIdQuery(
    tournamentEventId,
    { pollingInterval: 10000 },
  );
  const eventGroups = useAppSelector(selectAllEventGroupsByTournamentEventId);

  return { eventGroups, isLoading, error };
}
