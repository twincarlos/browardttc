import Tabs from '@/components/StyledComponents/Tabs/Tabs';
import EventGroupGallery from '../EventGroup/EventGroupGallery';
import type { TournamentEvent } from '@/types/tournamentEventType';

export default function TournamentEventTabs({ tournamentEvent }: { tournamentEvent: TournamentEvent }) {
  const tabs = [
    { label: 'Groups', component: <EventGroupGallery tournamentEvent={tournamentEvent} /> },
    { label: 'Draws', component: <div>Draws</div> },
    { label: 'Players', component: <div>Players</div> },
  ];

  return <Tabs tabs={tabs} />;
}