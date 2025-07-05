import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TournamentPlayer } from '@/types/tournamentPlayerType';

export const tournamentPlayerApi = createApi({
  reducerPath: 'tournamentPlayerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/tournament-player`,
  }),
  endpoints: (builder) => ({
    getTournamentPlayers: builder.query<TournamentPlayer[], void>({
      query: () => '/',
    }),
    getTournamentPlayersByTournamentId: builder.query<TournamentPlayer[], string>({
      query: (tournamentId) => `?tournament_id=${tournamentId}`,
    }),
    getTournamentPlayersByTournamentEventId: builder.query<TournamentPlayer[], string>({
      query: (tournamentEventId) => `?tournament_event_id=${tournamentEventId}`,
    }),
    createTournamentPlayer: builder.mutation<TournamentPlayer, TournamentPlayer>({
      query: (tournamentPlayer) => ({
        url: '/',
        method: 'POST',
        body: tournamentPlayer,
      }),
    }),
    updateTournamentPlayer: builder.mutation<TournamentPlayer, TournamentPlayer>({
      query: (tournamentPlayer) => ({
        url: `/${tournamentPlayer.id}`,
        method: 'PATCH',
        body: tournamentPlayer,
      }),
    }),
    deleteTournamentPlayer: builder.mutation<number, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetTournamentPlayersQuery,
  useGetTournamentPlayersByTournamentIdQuery,
  useGetTournamentPlayersByTournamentEventIdQuery,
  useCreateTournamentPlayerMutation,
  useUpdateTournamentPlayerMutation,
  useDeleteTournamentPlayerMutation,
} = tournamentPlayerApi;
