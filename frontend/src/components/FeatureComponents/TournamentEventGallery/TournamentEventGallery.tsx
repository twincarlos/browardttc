import Gallery from '@/components/StyledComponents/Gallery/Galery';
import TournamentEvent from '../TournamentEvent/TournamentEvent';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectAllTournamentEventsByTournamentId } from '@/store/slices/tournamentEventSlice';

export default function TournamentEventGallery() {
  const tournamentEvents = useAppSelector(
    selectAllTournamentEventsByTournamentId,
  );
  return (
    <Gallery>
      {Object.values(tournamentEvents).map((tournamentEvent) => (
        <TournamentEvent
          key={tournamentEvent.id}
          tournamentEvent={tournamentEvent}
        />
      ))}
    </Gallery>
  );
}
