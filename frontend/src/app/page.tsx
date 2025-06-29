'use client';
import { useGetTournamentsQuery } from '@/store/apis/tournamentApi';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectAllTournaments } from '@/store/slices/tournamentSlice';

export default function Home() {
  const { isLoading, error } = useGetTournamentsQuery();
  const tournaments = useAppSelector(selectAllTournaments);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div>
      {Object.values(tournaments).map((tournament) => (
        <div key={tournament.id}>{tournament.name}</div>
      ))}
    </div>
  );
}