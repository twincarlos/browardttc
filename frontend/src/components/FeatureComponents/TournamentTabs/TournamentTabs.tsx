import Tabs from "@/components/StyledComponents/Tabs/Tabs";
import type { Tournament as TournamentType } from "@/types/tournamentType";

export default function TournamentTabs({ tournament }: { tournament: TournamentType }) {
    const tabs = [
        { label: 'Events', component: <div>Events</div> },
        { label: 'Players', component: <div>Players</div> },
        { label: 'Matches', component: <div>Matches</div> },
        { label: 'Tables', component: <div>Tables</div> },
    ];

    return (
        <Tabs tabs={tabs} />
    )
};