import Header from '@/components/StyledComponents/Header/Header';
import type { Tournament } from '@/types/tournamentType';

export default function TournamentPageHeader({ tournament }: { tournament: Tournament }) {
  return <Header title={`Broward TTC | ${tournament.name}`} />;
}
