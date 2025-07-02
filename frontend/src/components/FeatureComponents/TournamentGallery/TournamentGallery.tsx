import Link from 'next/link';
import Tournament from '../Tournament/Tournament';
import Gallery from '@/components/StyledComponents/Gallery/Galery';
import type { Tournament as TournamentType } from '@/types/tournamentType';

export default function TournamentGallery({ tournaments }: { tournaments: TournamentType[] }) {

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
