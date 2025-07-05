import Gallery from '@/components/StyledComponents/Gallery/Gallery';
import useEventGroups from '@/hooks/EventGroup/useEventGroups';

export default function EventGroupGallery({ tournamentEventId }: { tournamentEventId: string }) {
  const { eventGroups, isLoading, error } = useEventGroups(tournamentEventId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return <Gallery>
    {Object.values(eventGroups).map((eventGroup) => (
        <p key={eventGroup.id}>{eventGroup.id}</p>
    ))}
  </Gallery>;
}