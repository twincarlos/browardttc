import Tabs from '@/components/StyledComponents/Tabs/Tabs';
import TournamentEventGallery from '../TournamentEvent/TournamentEventGallery';

export default function TournamentTabs({ tournamentId }: { tournamentId: string }) {
  const tabs = [
    { label: 'Events', component: <TournamentEventGallery tournamentId={tournamentId} /> },
    { label: 'Players', component: <div>Players</div> },
    { label: 'Matches', component: <div>Matches</div> },
    { label: 'Tables', component: <div>Tables</div> },
  ];

  return <Tabs tabs={tabs} />;
}
