'use client';
import { useGetTournamentsQuery } from '@/store/apis/tournamentApi';
import { useAppSelector } from '@/hooks/useAppSelector';

export default function Home() {
  const { isLoading, error } = useGetTournamentsQuery();
  const tournaments = useAppSelector((state) => state.tournament.entities);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  console.log(tournaments);

  return (
    <div>
      <h1>Tournaments</h1>
    </div>
  );
}
