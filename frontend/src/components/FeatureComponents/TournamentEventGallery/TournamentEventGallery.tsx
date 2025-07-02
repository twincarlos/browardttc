import Gallery from '@/components/StyledComponents/Gallery/Galery';
import type { TournamentEvent as TournamentEventType } from '@/types/tournamentEventType';
import TournamentEvent from '../TournamentEvent/TournamentEvent';

export default function TournamentEventGallery({
  tournamentEvents,
}: {
  tournamentEvents: TournamentEventType[];
}) {
  return (
    <Gallery>
      {tournamentEvents.map((tournamentEvent) => (
        <TournamentEvent
          key={tournamentEvent.id}
          tournamentEvent={tournamentEvent}
        />
      ))}
    </Gallery>
  );
}
