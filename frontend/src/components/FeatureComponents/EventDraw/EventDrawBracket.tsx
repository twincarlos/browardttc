'use client';
import { useMemo } from 'react';
import useDrawMatches from '@/hooks/DrawMatch/useDrawMatches';
import useEventDraw from '@/hooks/EventDraw/useEventDraw';
import type { TournamentEvent } from '@/types/tournamentEventType';
import EventDrawRound from './EventDrawRound';
import type { DrawMatch } from '@/types/drawMatchType';

export default function EventDrawBracket({
  tournamentEvent,
}: {
  tournamentEvent: TournamentEvent;
}) {
  const { eventDraws, isLoading, error } = useEventDraw(
    tournamentEvent.id.toString(),
  );

  const eventDraw = useMemo(() => {
    if (!eventDraws) return null;
    const eventDrawsArray = Object.values(eventDraws);
    return eventDrawsArray[0] || null;
  }, [eventDraws]);

  const { drawMatches } = useDrawMatches(eventDraw?.id || -1);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!eventDraw || !drawMatches) return <div>No event draws found</div>;

  return drawMatches.map((roundMatches: DrawMatch[]) => (
    <EventDrawRound
      key={roundMatches[0].id}
      drawMatches={roundMatches}
      tournamentEvent={tournamentEvent}
      eventDraw={eventDraw}
    />
  ));
}
