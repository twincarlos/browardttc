'use client';
import { useParams } from 'next/navigation';
import useTournamentEvent from '@/hooks/TournamentEvent/useTournamentEvent';
import TournamentEventPage from '@/components/FeatureComponents/TournamentEvent/TournamentEventPage';

export default function TournamentEventPageWrapper() {
  const { tournamentId, tournamentEventId } = useParams<{
    tournamentId: string;
    tournamentEventId: string;
  }>();
  const { tournament, tournamentEvent, isLoading, error } = useTournamentEvent(tournamentId, tournamentEventId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!tournament || !tournamentEvent) return <div>Tournament or tournament event not found</div>;

  return (
    <TournamentEventPage
      tournament={tournament}
      tournamentEvent={tournamentEvent}
    />
  );
}
