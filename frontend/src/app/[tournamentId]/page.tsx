'use client';
import TournamentTabs from "@/components/FeatureComponents/TournamentTabs/TournamentTabs";
import Header from "@/components/StyledComponents/Header/Header";
import Main from "@/components/StyledComponents/Main/Main";
import { useParams } from "next/navigation";
import { useGetTournamentQuery } from "@/store/apis/tournamentApi";
import { selectTournamentById } from "@/store/slices/tournamentSlice";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function TournamentPage() {
    const { tournamentId } = useParams<{ tournamentId: string }>();
    const { isLoading, error } = useGetTournamentQuery(tournamentId);
    const tournament = useAppSelector((state) => selectTournamentById(state, Number(tournamentId)));

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {JSON.stringify(error)}</div>;
    if (!tournament) return <div>Tournament not found</div>;

    return (
        <>
            <Header title={`Broward TTC | ${tournament.name}`} />
            <Main>
                <TournamentTabs tournament={tournament} />
            </Main>
        </>
    )
}