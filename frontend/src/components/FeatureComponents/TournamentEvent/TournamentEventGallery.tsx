import TournamentEventCard from './TournamentEventCard';
import { useAppSelector } from '@/hooks/useAppSelector';
import Gallery from '@/components/StyledComponents/Gallery/Gallery';
import { selectAllTournamentEventsByTournamentId } from '@/store/slices/tournamentEventSlice';
import { useGetTournamentEventsByTournamentIdQuery } from '@/store/apis/tournamentEventApi';
import Link from 'next/link';

export default function TournamentEventGallery({ tournamentId }: { tournamentId: string }) {
  const { isLoading, error } = useGetTournamentEventsByTournamentIdQuery(
    tournamentId,
    { pollingInterval: 10000 },
  );
  const tournamentEvents = useAppSelector(
    selectAllTournamentEventsByTournamentId,
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <Gallery>
      {Object.values(tournamentEvents).map((tournamentEvent) => (
        <Link
          key={tournamentEvent.id}
          href={`/${tournamentId}/${tournamentEvent.id}`}
        >
          <TournamentEventCard tournamentEvent={tournamentEvent} />
        </Link>
      ))}
    </Gallery>
  );
}
