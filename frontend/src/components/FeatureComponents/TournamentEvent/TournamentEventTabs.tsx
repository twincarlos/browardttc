import Tabs from '@/components/StyledComponents/Tabs/Tabs';
import EventGroupGallery from '../EventGroup/EventGroupGallery';

export default function TournamentEventTabs({ tournamentEventId }: { tournamentEventId: string }) {
  const tabs = [
    { label: 'Groups', component: <EventGroupGallery tournamentEventId={tournamentEventId} /> },
    { label: 'Draws', component: <div>Draws</div> },
    { label: 'Players', component: <div>Players</div> },
  ];

  return <Tabs tabs={tabs} />;
}