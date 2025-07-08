'use client';
import { useAppSelector } from '../useAppSelector';
import { useGetTournamentQuery } from '@/store/apis/tournamentApi';
import { selectTournamentById } from '@/store/slices/tournamentSlice';

export default function useTournament(tournamentId: string) {
  const { isLoading, error } = useGetTournamentQuery(tournamentId, {
    // pollingInterval: 10000,
  });
  const tournament = useAppSelector((state) =>
    selectTournamentById(state, +tournamentId),
  );
  return { tournament, isLoading, error };
}
