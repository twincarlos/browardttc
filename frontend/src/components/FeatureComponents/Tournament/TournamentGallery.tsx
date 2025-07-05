'use client';
import Link from 'next/link';
import TournamentCard from './TournamentCard';
import { useAppSelector } from '@/hooks/useAppSelector';
import Gallery from '@/components/StyledComponents/Gallery/Gallery';
import { useGetTournamentsQuery } from '@/store/apis/tournamentApi';
import { selectAllTournaments } from '@/store/slices/tournamentSlice';

export default function TournamentGallery() {
  const { isLoading, error } = useGetTournamentsQuery(undefined, { pollingInterval: 10000 });
  const tournaments = useAppSelector(selectAllTournaments);

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
