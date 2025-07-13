import Match from '../Match/Match';
import { EventDraw } from '@/types/eventDrawType';
import type { DrawMatch } from '@/types/drawMatchType';
import { TournamentEvent } from '@/types/tournamentEventType';

export default function DrawMatches({
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
      {drawMatches.map((drawMatch) => (
        <Match
          key={drawMatch.id}
          match={drawMatch}
          tournamentEvent={tournamentEvent}
          stage={eventDraw}
        />
      ))}
    </div>
  );
}
