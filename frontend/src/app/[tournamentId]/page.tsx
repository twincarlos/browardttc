'use client';
import { useParams } from 'next/navigation';
import { useGetTournamentQuery } from '@/store/apis/tournamentApi';
import { useAppSelector } from '@/hooks/useAppSelector';

export default function TournamentPage() {
  const { tournamentId } = useParams();
  const { isLoading, error } = useGetTournamentQuery(tournamentId as string);
  const tournament = useAppSelector((state) => state.tournament.current);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!tournament) return <div>Tournament not found</div>;

  return (
    <div>
      <h1>{tournament.name}</h1>
    </div>
  );
}
