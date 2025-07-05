import Main from '@/components/StyledComponents/Main/Main';
import TournamentEventHeader from './TournamentEventHeader';
import TournamentEventTabs from './TournamentEventTabs';

export default function TournamentEventPage({ tournamentId, tournamentEventId }: { tournamentId: string, tournamentEventId: string }) {
  return (
    <>
      <TournamentEventHeader tournamentId={tournamentId} tournamentEventId={tournamentEventId} />
      <Main>
        <TournamentEventTabs tournamentEventId={tournamentEventId} />
      </Main>
    </>
  );
}