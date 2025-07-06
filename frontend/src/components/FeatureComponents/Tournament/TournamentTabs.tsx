import Tabs from '@/components/StyledComponents/Tabs/Tabs';
import TournamentEventGallery from '../TournamentEvent/TournamentEventGallery';
import type { Tournament } from '@/types/tournamentType';

export default function TournamentTabs({ tournament }: { tournament: Tournament }) {
  const tabs = [
    { label: 'Events', component: <TournamentEventGallery tournament={tournament} /> },
    { label: 'Players', component: <div>Players</div> },
    { label: 'Matches', component: <div>Matches</div> },
    { label: 'Tables', component: <div>Tables</div> },
  ];

  return <Tabs tabs={tabs} />;
}
