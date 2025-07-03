'use client';
import { useGetTournamentEventQuery } from '@/store/apis/tournamentEventApi';
import TournamentEventTabs from '@/components/FeatureComponents/TournamentEvent/TournamentEventTabs';
import Header from '@/components/StyledComponents/Header/Header';
import Main from '@/components/StyledComponents/Main/Main';
import { useParams } from 'next/navigation';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectTournamentEventById } from '@/store/slices/tournamentEventSlice';
import { useGetTournamentQuery } from '@/store/apis/tournamentApi';
import { selectCurrentTournament } from '@/store/slices/tournamentSlice';

export default function TournamentEventPage() {
  const { tournamentId, tournamentEventId } = useParams<{
    tournamentId: string;
    tournamentEventId: string;
  }>();

  const { isLoading: isTournamentLoading, error: tournamentError } = useGetTournamentQuery(tournamentId, { pollingInterval: 10000 });
  const tournament = useAppSelector(selectCurrentTournament);

  const { isLoading: isTournamentEventLoading, error: tournamentEventError } = useGetTournamentEventQuery(tournamentEventId, { pollingInterval: 10000 });
  const tournamentEvent = useAppSelector((state) => selectTournamentEventById(state, +tournamentEventId));

  if (isTournamentLoading || isTournamentEventLoading) return <div>Loading...</div>;
  if (tournamentError || tournamentEventError) return <div>Error: {JSON.stringify(tournamentError || tournamentEventError)}</div>;

  if (!tournament) return <div>Tournament not found</div>;
  if (!tournamentEvent) return <div>Tournament event not found</div>;

  return (
    <>
      <Header title={`${tournament.name} | ${tournamentEvent.name}`} />
      <Main>
        <TournamentEventTabs />
      </Main>
    </>
  );
}