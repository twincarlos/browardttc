import { useGetTournamentEventsByTournamentIdQuery } from '@/store/apis/tournamentEventApi';
import { selectAllTournamentEventsByTournamentId } from '@/store/slices/tournamentEventSlice';
import { useAppSelector } from '../useAppSelector';

export default function useTournamentEvents(tournamentId: string) {
  const { isLoading, error } = useGetTournamentEventsByTournamentIdQuery(
    tournamentId,
    { pollingInterval: 10000 },
  );
  const tournamentEvents = useAppSelector(
    selectAllTournamentEventsByTournamentId,
  );
  return { tournamentEvents, isLoading, error };
}
