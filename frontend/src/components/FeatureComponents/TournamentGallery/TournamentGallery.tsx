import Link from 'next/link';
import Tournament from '../Tournament/Tournament';
import Gallery from '@/components/StyledComponents/Gallery/Galery';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectAllTournaments } from '@/store/slices/tournamentSlice';

export default function TournamentGallery() {
  const tournaments = useAppSelector(selectAllTournaments);

  return (
    <Gallery>
      {Object.values(tournaments).map((tournament) => (
        <Link key={tournament.id} href={`/${tournament.id}`}>
          <Tournament tournament={tournament} />
        </Link>
      ))}
    </Gallery>
  );
}
