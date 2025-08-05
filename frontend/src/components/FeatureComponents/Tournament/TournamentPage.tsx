import Main from '@/components/StyledComponents/Main/Main';
import TournamentTabs from './TournamentTabs';
import type { Tournament } from '@/types/tournamentType';
import TournamentPageHeader from './TournamentPageHeader';

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
