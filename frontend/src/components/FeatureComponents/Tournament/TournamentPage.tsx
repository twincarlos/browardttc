import Main from '@/components/StyledComponents/Main/Main';
import TournamentTabs from './TournamentTabs';
import TournamentPageHeader from './TournamentPageHeader';

export default function TournamentPage({
  tournamentId,
}: {
  tournamentId: string;
}) {
  return (
    <>
      <TournamentPageHeader tournamentId={tournamentId} />
      <Main>
        <TournamentTabs tournamentId={tournamentId} />
      </Main>
    </>
  );
}
