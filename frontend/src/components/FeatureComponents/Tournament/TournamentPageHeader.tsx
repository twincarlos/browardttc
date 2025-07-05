import Header from '@/components/StyledComponents/Header/Header';
import { useGetTournamentQuery } from '@/store/apis/tournamentApi';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectTournamentById } from '@/store/slices/tournamentSlice';

export default function TournamentPageHeader({
  tournamentId,
}: {
  tournamentId: string;
}) {
  const { isLoading: isTournamentLoading, error: tournamentError } =
    useGetTournamentQuery(tournamentId, { pollingInterval: 10000 });
  const tournament = useAppSelector((state) =>
    selectTournamentById(state, +tournamentId),
  );

  if (isTournamentLoading) return <div>Loading...</div>;
  if (tournamentError)
    return <div>Error: {JSON.stringify(tournamentError)}</div>;

  if (!tournament) return <div>Tournament not found</div>;
  return <Header title={`Broward TTC | ${tournament.name}`} />;
}
