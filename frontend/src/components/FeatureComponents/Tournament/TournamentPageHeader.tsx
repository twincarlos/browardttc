'use client';
import Header from '@/components/StyledComponents/Header/Header';
import useTournament from '@/hooks/Tournament/useTournament';

export default function TournamentPageHeader({ tournamentId }: { tournamentId: string }) {
  const { tournament, isLoading, error } = useTournament(tournamentId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  if (!tournament) return <div>Tournament not found</div>;
  return <Header title={`Broward TTC | ${tournament.name}`} />;
}
