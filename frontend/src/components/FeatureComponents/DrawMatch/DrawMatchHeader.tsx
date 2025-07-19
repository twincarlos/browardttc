import type { EventDraw } from "@/types/eventDrawType";
import type { DrawMatch } from '@/types/drawMatchType';
import { showDay, formatTime } from '@/utils/formatDate';
import type { TournamentEvent } from '@/types/tournamentEventType';
import Status from '@/components/StyledComponents/Status/Status';

export default function DrawMatchHeader({
    tournamentEvent,
    eventDraw,
    drawMatch
}: {
    tournamentEvent: TournamentEvent;
    eventDraw: EventDraw;
    drawMatch: DrawMatch;
}) {
  return (
    <div className="match-header f jc-sb ai-fs p-1 bb">
      <div className="f fd-c fs-sm">
        <span>
          {tournamentEvent.name} • Round of {drawMatch.round}
        </span>
        <span>
          {showDay(eventDraw.date)} • {formatTime(eventDraw.time)}
        </span>
      </div>
      <Status status={drawMatch.status} />
    </div>
  );
}
