import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { EventPlayer } from '@/types/eventPlayerType';

export const eventPlayerApi = createApi({
  reducerPath: 'eventPlayerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/event-player`,
  }),
  endpoints: (builder) => ({
    getEventPlayers: builder.query<EventPlayer[], void>({
      query: () => '/',
    }),
    getEventPlayersByTournamentId: builder.query<EventPlayer[], string>({
      query: (tournamentId) => `?tournament_id=${tournamentId}`,
    }),
    getEventPlayersByTournamentEventId: builder.query<EventPlayer[], string>({
      query: (tournamentEventId) => `?tournament_event_id=${tournamentEventId}`,
    }),
    createEventPlayer: builder.mutation<EventPlayer, EventPlayer>({
      query: (eventPlayer) => ({
        url: '/',
        method: 'POST',
        body: eventPlayer,
      }),
    }),
    updateEventPlayer: builder.mutation<EventPlayer, EventPlayer>({
      query: (eventPlayer) => ({
        url: `/${eventPlayer.id}`,
        method: 'PATCH',
        body: eventPlayer,
      }),
    }),
    deleteEventPlayer: builder.mutation<number, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetEventPlayersQuery,
  useGetEventPlayersByTournamentIdQuery,
  useGetEventPlayersByTournamentEventIdQuery,
  useCreateEventPlayerMutation,
  useUpdateEventPlayerMutation,
  useDeleteEventPlayerMutation,
} = eventPlayerApi;
