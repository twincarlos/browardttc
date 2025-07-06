import type { Tournament } from '@/types/tournamentType';
import Header from '@/components/StyledComponents/Header/Header';
import type { TournamentEvent } from '@/types/tournamentEventType';

export default function TournamentEventHeader({
  tournament,
  tournamentEvent,
}: {
  tournament: Tournament;
  tournamentEvent: TournamentEvent;
}) {

  return <Header title={`${tournament.name} | ${tournamentEvent.name}`} />;
}
