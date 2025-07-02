import Tabs from "@/components/StyledComponents/Tabs/Tabs";
import TournamentEventGallery from "../TournamentEventGallery/TournamentEventGallery";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectAllTournamentEventsByTournamentId } from "@/store/slices/tournamentEventSlice";

export default function TournamentTabs() {
    const tournamentEvents = useAppSelector(selectAllTournamentEventsByTournamentId);

    const tabs = [
        { label: 'Events', component: <TournamentEventGallery tournamentEvents={tournamentEvents} /> },
        { label: 'Players', component: <div>Players</div> },
        { label: 'Matches', component: <div>Matches</div> },
        { label: 'Tables', component: <div>Tables</div> },
    ];

    return (
        <Tabs tabs={tabs} />
    )
};