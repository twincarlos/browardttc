import DrawMatch from './DrawMatch';
import type { EventDraw } from '@/types/eventDrawType';
import type { TournamentEvent } from '@/types/tournamentEventType';
import type { DrawMatch as DrawMatchType } from '@/types/drawMatchType';

export default function DrawMatches({
  drawMatches,
  tournamentEvent,
  eventDraw,
}: {
  drawMatches: DrawMatchType[];
  tournamentEvent: TournamentEvent;
  eventDraw: EventDraw;
}) {
  return (
    <div>
      {drawMatches.map((drawMatch) => (
        <DrawMatch
          key={drawMatch.id}
          tournamentEvent={tournamentEvent}
          eventDraw={eventDraw}
          drawMatch={drawMatch}
        />
      ))}
    </div>
  );
}
