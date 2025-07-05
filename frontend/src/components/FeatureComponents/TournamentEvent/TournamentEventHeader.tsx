'use client';
import Header from '@/components/StyledComponents/Header/Header';
import useTournamentEvent from '@/hooks/TournamentEvent/useTournamentEvent';

export default function TournamentEventHeader({
  tournamentId,
  tournamentEventId,
}: {
  tournamentId: string;
  tournamentEventId: string;
}) {
  const { tournament, tournamentEvent, isLoading, error } =
    useTournamentEvent(tournamentId, tournamentEventId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!tournament || !tournamentEvent)
    return <div>Tournament or tournament event not found</div>;

  return <Header title={`${tournament.name} | ${tournamentEvent.name}`} />;
}
