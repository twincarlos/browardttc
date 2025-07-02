'use client';
import TournamentTabs from "@/components/FeatureComponents/TournamentTabs/TournamentTabs";
import Header from "@/components/StyledComponents/Header/Header";
import Main from "@/components/StyledComponents/Main/Main";
import { useParams } from "next/navigation";
import { useGetTournamentQuery } from "@/store/apis/tournamentApi";
import { selectTournamentById } from "@/store/slices/tournamentSlice";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useGetTournamentEventsByTournamentIdQuery } from "@/store/apis/tournamentEventApi";

export default function TournamentPage() {
    const { tournamentId } = useParams<{ tournamentId: string }>();

    const { isLoading: isTournamentLoading, error: tournamentError } = useGetTournamentQuery(tournamentId);
    const tournament = useAppSelector((state) => selectTournamentById(state, +tournamentId));
    
    const { isLoading: isTournamentEventsLoading, error: tournamentEventsError } = useGetTournamentEventsByTournamentIdQuery(tournamentId);

    if (isTournamentLoading || isTournamentEventsLoading) return <div>Loading...</div>;
    if (tournamentError || tournamentEventsError) return <div>Error: {JSON.stringify(tournamentError || tournamentEventsError)}</div>;
    
    if (!tournament) return <div>Tournament not found</div>;

    return (
        <>
            <Header title={`Broward TTC | ${tournament.name}`} />
            <Main>
                <TournamentTabs />
            </Main>
        </>
    )
}