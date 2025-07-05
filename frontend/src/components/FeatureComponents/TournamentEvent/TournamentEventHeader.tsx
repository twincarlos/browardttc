import Header from '@/components/StyledComponents/Header/Header';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useGetTournamentQuery } from '@/store/apis/tournamentApi';
import { useGetTournamentEventQuery } from '@/store/apis/tournamentEventApi';
import { selectTournamentEventById } from '@/store/slices/tournamentEventSlice';
import { selectTournamentById } from '@/store/slices/tournamentSlice';

export default function TournamentEventHeader({
  tournamentId,
  tournamentEventId,
}: {
  tournamentId: string;
  tournamentEventId: string;
}) {
  const { isLoading: isTournamentLoading, error: tournamentError } =
    useGetTournamentQuery(tournamentId, { pollingInterval: 10000 });
  const tournament = useAppSelector((state) =>
    selectTournamentById(state, +tournamentId),
  );

  const { isLoading: isTournamentEventLoading, error: tournamentEventError } =
    useGetTournamentEventQuery(tournamentEventId, { pollingInterval: 10000 });
  const tournamentEvent = useAppSelector((state) =>
    selectTournamentEventById(state, +tournamentEventId),
  );

  if (isTournamentLoading || isTournamentEventLoading)
    return <div>Loading...</div>;
  if (tournamentError || tournamentEventError)
    return (
      <div>
        Error: {JSON.stringify(tournamentError || tournamentEventError)}
      </div>
    );

  if (!tournament || !tournamentEvent)
    return <div>Tournament or tournament event not found</div>;

  return <Header title={`${tournament.name} | ${tournamentEvent.name}`} />;
}
