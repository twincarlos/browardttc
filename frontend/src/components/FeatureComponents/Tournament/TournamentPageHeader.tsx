import type { Tournament } from '@/types/tournamentType';
import TournamentMenu from '@/components/Menus/TournamentMenu';
import Header from '@/components/StyledComponents/Header/Header';

export default function TournamentPageHeader({ tournament }: { tournament: Tournament }) {
  return <Header title={`Broward TTC | ${tournament.name}`} menu={<TournamentMenu />} />;
}
