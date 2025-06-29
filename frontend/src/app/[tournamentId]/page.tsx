'use client';
import { useParams } from 'next/navigation';
import { useGetTournamentQuery } from '@/store/apis/tournamentApi';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectTournamentById } from '@/store/slices/tournamentSlice';

export default function TournamentPage() {
  const { tournamentId } = useParams();
  const { isLoading, error } = useGetTournamentQuery(tournamentId as string);
  const tournament = useAppSelector((state) =>
    selectTournamentById(state, Number(tournamentId)),
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!tournament) return <div>Tournament not found</div>;

  return (
    <div>
      <h1>{tournament.name}</h1>
    </div>
  );
}
