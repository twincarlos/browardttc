'use client';
import Link from 'next/link';
import TournamentEventCard from './TournamentEventCard';
import Gallery from '@/components/StyledComponents/Gallery/Gallery';
import useTournamentEvents from '@/hooks/TournamentEvent/useTournamentEvents';

export default function TournamentEventGallery({ tournamentId }: { tournamentId: string }) {
  const { tournamentEvents, isLoading, error } = useTournamentEvents(tournamentId);

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
