import Tabs from '@/components/StyledComponents/Tabs/Tabs';
import EventDrawBracket from '../EventDraw/EventDrawBracket';
import EventGroupGallery from '../EventGroup/EventGroupGallery';
import type { TournamentEvent } from '@/types/tournamentEventType';

export default function TournamentEventTabs({ tournamentEvent }: { tournamentEvent: TournamentEvent }) {
  const tabs = [
    { label: 'Groups', component: <EventGroupGallery tournamentEvent={tournamentEvent} /> },
    { label: 'Draws', component: <EventDrawBracket tournamentEvent={tournamentEvent} /> },
    { label: 'Players', component: <div>Players</div> },
  ];

  return <Tabs tabs={tabs} />;
}