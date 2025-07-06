import Main from '@/components/StyledComponents/Main/Main';
import TournamentTabs from './TournamentTabs';
import TournamentPageHeader from './TournamentPageHeader';
import type { Tournament } from '@/types/tournamentType';

export default function TournamentPage({ tournament }: { tournament: Tournament }) {
  return (
    <>
      <TournamentPageHeader tournament={tournament} />
      <Main>
        <TournamentTabs tournament={tournament} />
      </Main>
    </>
  );
}
