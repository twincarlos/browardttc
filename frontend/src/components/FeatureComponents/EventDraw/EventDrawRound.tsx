import DrawMatches from '../DrawMatch/DrawMatches';
import type { DrawMatch } from '@/types/drawMatchType';
import type { EventDraw } from '@/types/eventDrawType';
import type { TournamentEvent } from '@/types/tournamentEventType';

export default function EventDrawRound({
  drawMatches,
  tournamentEvent,
  eventDraw,
}: {
  drawMatches: DrawMatch[];
  tournamentEvent: TournamentEvent;
  eventDraw: EventDraw;
}) {
  return (
    <div>
      <DrawMatches
        drawMatches={drawMatches}
        tournamentEvent={tournamentEvent}
        eventDraw={eventDraw}
      />
    </div>
  );
}
