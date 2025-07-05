import { useGetTournamentEventQuery } from '@/store/apis/tournamentEventApi';
import { selectTournamentEventById } from '@/store/slices/tournamentEventSlice';
import { useAppSelector } from '../useAppSelector';
import { selectTournamentById } from '@/store/slices/tournamentSlice';
import { useGetTournamentQuery } from '@/store/apis/tournamentApi';

export default function useTournamentEvent(tournamentId: string, tournamentEventId: string) {
  const { isLoading: isTournamentLoading, error: tournamentError } =
    useGetTournamentQuery(tournamentId, { pollingInterval: 10000 });
  const tournament = useAppSelector((state) =>
    selectTournamentById(state, +tournamentId),
  );

  const { isLoading: isTournamentEventLoading, error: tournamentEventError } =
    useGetTournamentEventQuery(tournamentEventId, { pollingInterval: 10000 });
  const tournamentEvent = useAppSelector((state) =>
    selectTournamentEventById(state, +tournamentEventId),
  );

  return { tournament, tournamentEvent, isLoading: isTournamentLoading || isTournamentEventLoading, error: tournamentError || tournamentEventError };
}
