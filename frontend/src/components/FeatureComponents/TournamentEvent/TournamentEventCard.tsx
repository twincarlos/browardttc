import './TournamentEvent.css';
import { formatTime, longDate } from '@/utils/formatDate';
import Status from '@/components/StyledComponents/Status/Status';
import type { TournamentEvent as TournamentEventType } from '@/types/tournamentEventType';

export default function TournamentEvent({
  tournamentEvent,
}: {
  tournamentEvent: TournamentEventType;
}) {
  return (
    <div className="tournament-event bra p-1 f fd-c">
      <Status status={tournamentEvent.status} />
      <span className="tournament-event-name mt-1">{tournamentEvent.name}</span>
      <span className="tournament-event-date fs-sm">
        {longDate(tournamentEvent.date)} • {formatTime(tournamentEvent.time)}
      </span>
    </div>
  );
}
