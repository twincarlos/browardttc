import './TournamentEvent.css';
import type { TournamentEvent as TournamentEventType } from '@/types/tournamentEventType';

export default function TournamentEvent({
  tournamentEvent,
}: {
  tournamentEvent: TournamentEventType;
}) {
  return (
    <div>
      <h1>{tournamentEvent.name}</h1>
    </div>
  );
}
