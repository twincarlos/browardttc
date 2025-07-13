'use client';
import EventGroupCard from './EventGroupCard';
import useEventGroups from '@/hooks/EventGroup/useEventGroups';
import type { TournamentEvent } from '@/types/tournamentEventType';
import Gallery from '@/components/StyledComponents/Gallery/Gallery';

export default function EventGroupGallery({
  tournamentEvent,
}: {
  tournamentEvent: TournamentEvent;
}) {
  const { eventGroups, isLoading, error } = useEventGroups(
    tournamentEvent.id.toString(),
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!eventGroups) return <div>No event groups found</div>;

  return (
    <Gallery>
      {Object.values(eventGroups).map((eventGroup) => (
        <EventGroupCard
          key={eventGroup.id}
          eventGroup={eventGroup}
          tournamentEvent={tournamentEvent}
        />
      ))}
    </Gallery>
  );
}
