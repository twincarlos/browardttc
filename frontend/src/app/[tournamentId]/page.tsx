'use client';
import { useParams } from 'next/navigation';
import useTournament from '@/hooks/Tournament/useTournament';
import TournamentPage from '@/components/FeatureComponents/Tournament/TournamentPage';

export default function TournamentPageWrapper() {
  const { tournamentId } = useParams<{ tournamentId: string }>();
  const { tournament, isLoading, error } = useTournament(tournamentId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>JSON.stringify(error)</div>;
  if (!tournament) return <div>Tournament not found</div>;
  
  return <TournamentPage tournament={tournament} />;
}
