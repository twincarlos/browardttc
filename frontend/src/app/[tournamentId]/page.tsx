'use client';
import { useParams } from 'next/navigation';
import { useAppSelector } from '@/hooks/useAppSelector';
import Main from '@/components/StyledComponents/Main/Main';
import Header from '@/components/StyledComponents/Header/Header';
import { useGetTournamentQuery } from '@/store/apis/tournamentApi';
import TournamentTabs from '@/components/Tournament/TournamentTabs';
import { selectTournamentById } from '@/store/slices/tournamentSlice';

export default function TournamentPage() {
  const { tournamentId } = useParams<{ tournamentId: string }>();

  const { isLoading: isTournamentLoading, error: tournamentError } =
    useGetTournamentQuery(tournamentId, { pollingInterval: 10000 });
  const tournament = useAppSelector((state) =>
    selectTournamentById(state, +tournamentId),
  );

  if (isTournamentLoading) return <div>Loading...</div>;
  if (tournamentError)
    return <div>Error: {JSON.stringify(tournamentError)}</div>;

  if (!tournament) return <div>Tournament not found</div>;

  return (
    <>
      <Header title={`Broward TTC | ${tournament.name}`} />
      <Main>
        <TournamentTabs tournamentId={tournament.id.toString()} />
      </Main>
    </>
  );
}
