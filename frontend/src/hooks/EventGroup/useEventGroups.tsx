'use client';
import { useAppSelector } from '../useAppSelector';
import { selectAllEventGroupsByTournamentEventId } from '@/store/slices/eventGroupSlice';
import { useGetEventGroupsByTournamentEventIdQuery } from '@/store/apis/eventGroupApi';
import { useGetGroupPlayersByTournamentEventIdQuery } from '@/store/apis/groupPlayerApi';
import { useGetEventPlayersByTournamentEventIdQuery } from '@/store/apis/eventPlayerApi';
import { useGetTournamentPlayersByTournamentEventIdQuery } from '@/store/apis/tournamentPlayerApi';
import { useGetGroupMatchesByTournamentEventIdQuery } from '@/store/apis/groupMatchApi';

export default function useEventGroups(tournamentEventId: string) {
  const {
    isLoading: isTournamentPlayersLoading,
    error: tournamentPlayersError,
  } = useGetTournamentPlayersByTournamentEventIdQuery(tournamentEventId, {
    pollingInterval: 10000,
  });
  const { isLoading: isEventPlayersLoading, error: eventPlayersError } =
    useGetEventPlayersByTournamentEventIdQuery(tournamentEventId, {
      pollingInterval: 10000,
    });
  const { isLoading: isGroupPlayersLoading, error: groupPlayersError } =
    useGetGroupPlayersByTournamentEventIdQuery(tournamentEventId, {
      pollingInterval: 10000,
    });
  const { isLoading: isEventGroupsLoading, error: eventGroupsError } =
    useGetEventGroupsByTournamentEventIdQuery(tournamentEventId, {
      pollingInterval: 10000,
    });
  const { isLoading: isGroupMatchesLoading, error: groupMatchesError } =
    useGetGroupMatchesByTournamentEventIdQuery(tournamentEventId, {
      pollingInterval: 10000,
    });
  const eventGroups = useAppSelector(selectAllEventGroupsByTournamentEventId);

  return {
    eventGroups,
    isLoading:
      isTournamentPlayersLoading ||
      isEventPlayersLoading ||
      isGroupPlayersLoading ||
      isEventGroupsLoading ||
      isGroupMatchesLoading,
    error:
      tournamentPlayersError ||
      eventPlayersError ||
      groupPlayersError ||
      eventGroupsError ||
      groupMatchesError,
  };
}
