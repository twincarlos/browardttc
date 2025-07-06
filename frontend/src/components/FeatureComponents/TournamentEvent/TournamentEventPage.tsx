import Main from '@/components/StyledComponents/Main/Main';
import TournamentEventHeader from './TournamentEventHeader';
import TournamentEventTabs from './TournamentEventTabs';
import type { Tournament } from '@/types/tournamentType';
import type { TournamentEvent } from '@/types/tournamentEventType';

export default function TournamentEventPage({ tournament, tournamentEvent }: { tournament: Tournament, tournamentEvent: TournamentEvent }) {
  return (
    <>
      <TournamentEventHeader tournament={tournament} tournamentEvent={tournamentEvent} />
      <Main>
        <TournamentEventTabs tournamentEvent={tournamentEvent} />
      </Main>
    </>
  );
}