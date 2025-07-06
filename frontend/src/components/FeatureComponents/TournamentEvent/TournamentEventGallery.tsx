'use client';
import Link from 'next/link';
import TournamentEventCard from './TournamentEventCard';
import Gallery from '@/components/StyledComponents/Gallery/Gallery';
import useTournamentEvents from '@/hooks/TournamentEvent/useTournamentEvents';
import type { Tournament } from '@/types/tournamentType';

export default function TournamentEventGallery({ tournament }: { tournament: Tournament }) {
  const { tournamentEvents, isLoading, error } = useTournamentEvents(tournament.id.toString());

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!tournamentEvents) return <div>No tournament events found</div>;

  return (
    <Gallery>
      {Object.values(tournamentEvents).map((tournamentEvent) => (
        <Link
          key={tournamentEvent.id}
          href={`/${tournament.id}/${tournamentEvent.id}`}
        >
          <TournamentEventCard tournamentEvent={tournamentEvent} />
        </Link>
      ))}
    </Gallery>
  );
}
