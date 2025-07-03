import Tabs from '@/components/StyledComponents/Tabs/Tabs';

export default function TournamentEventTabs() {
  const tabs = [
    { label: 'Groups', component: <div>Groups</div> },
    { label: 'Draws', component: <div>Draws</div> },
    { label: 'Players', component: <div>Players</div> },
  ];

  return <Tabs tabs={tabs} />;
}