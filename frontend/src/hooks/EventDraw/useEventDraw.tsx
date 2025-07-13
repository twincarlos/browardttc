'use client';
import { useAppSelector } from '../useAppSelector';
import { useGetEventDrawsByTournamentEventIdQuery } from '@/store/apis/eventDrawApi';
import { useGetDrawMatchesByTournamentEventIdQuery } from '@/store/apis/drawMatchApi';
import { selectAllEventDrawsByTournamentEventId } from '@/store/slices/eventDrawSlice';
import { useGetDrawPlayersByTournamentEventIdQuery } from '@/store/apis/drawPlayerApi';
import { useGetEventPlayersByTournamentEventIdQuery } from '@/store/apis/eventPlayerApi';
import { useGetTournamentPlayersByTournamentEventIdQuery } from '@/store/apis/tournamentPlayerApi';

export default function useEventDraw(tournamentEventId: string) {
  const {
    isLoading: isTournamentPlayersLoading,
    error: tournamentPlayersError,
  } = useGetTournamentPlayersByTournamentEventIdQuery(tournamentEventId, {
    // pollingInterval: 10000,
  });

  const { isLoading: isEventPlayersLoading, error: eventPlayersError } =
    useGetEventPlayersByTournamentEventIdQuery(tournamentEventId, {
      // pollingInterval: 10000,
    });

  const { isLoading: isDrawPlayersLoading, error: drawPlayersError } =
    useGetDrawPlayersByTournamentEventIdQuery(tournamentEventId, {
      // pollingInterval: 10000,
    });
  const { isLoading: isEventDrawsLoading, error: eventDrawsError } =
    useGetEventDrawsByTournamentEventIdQuery(tournamentEventId, {
      // pollingInterval: 10000,
    });
  const { isLoading: isDrawMatchesLoading, error: drawMatchesError } =
    useGetDrawMatchesByTournamentEventIdQuery(tournamentEventId, {
      // pollingInterval: 10000,
    });

  const eventDraws = useAppSelector(selectAllEventDrawsByTournamentEventId);

  return {
    eventDraws,
    isLoading:
      isTournamentPlayersLoading ||
      isEventPlayersLoading ||
      isDrawPlayersLoading ||
      isEventDrawsLoading ||
      isDrawMatchesLoading,
    error:
      tournamentPlayersError ||
      eventPlayersError ||
      drawPlayersError ||
      eventDrawsError ||
      drawMatchesError,
  };
}
