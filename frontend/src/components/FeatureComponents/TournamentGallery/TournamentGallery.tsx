'use client';
import Tournament from '../Tournament/Tournament';
import { useAppSelector } from '@/hooks/useAppSelector';
import Gallery from '@/components/StyledComponents/Gallery/Galery';
import { useGetTournamentsQuery } from '@/store/apis/tournamentApi';
import { selectAllTournaments } from '@/store/slices/tournamentSlice';

export default function TournamentGallery() {
  const { isLoading, error } = useGetTournamentsQuery();
  const tournaments = useAppSelector(selectAllTournaments);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <Gallery>
      {Object.values(tournaments).map((tournament) => (
        <Tournament key={tournament.id} tournament={tournament} />
      ))}
    </Gallery>
  );
}
