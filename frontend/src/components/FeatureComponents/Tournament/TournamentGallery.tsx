'use client';
import Link from 'next/link';
import TournamentCard from './TournamentCard';
import Gallery from '@/components/StyledComponents/Gallery/Gallery';
import useTournaments from '@/hooks/Tournament/useTournaments';

export default function TournamentGallery() {
  const { tournaments, isLoading, error } = useTournaments();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <Gallery>
      {Object.values(tournaments).map((tournament) => (
        <Link key={tournament.id} href={`/${tournament.id}`}>
          <TournamentCard tournament={tournament} />
        </Link>
      ))}
    </Gallery>
  );
}
