'use client';
import { useAppSelector } from '../useAppSelector';
import { useGetTournamentsQuery } from '@/store/apis/tournamentApi';
import { selectAllTournaments } from '@/store/slices/tournamentSlice';

export default function useTournaments() {
  const { isLoading, error } = useGetTournamentsQuery(undefined, {
    pollingInterval: 10000,
  });
  const tournaments = useAppSelector(selectAllTournaments);
  return { tournaments, isLoading, error };
}
