import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TournamentEvent } from '../../types/tournamentEventType';

export const tournamentEventApi = createApi({
  reducerPath: 'tournamentEventApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/tournament-event`,
  }),
  endpoints: (builder) => ({
    getTournamentEvent: builder.query<TournamentEvent, string>({
      query: (id) => `/${id}`,
    }),
    getTournamentEventsByTournamentId: builder.query<TournamentEvent[], string>({
      query: (tournament_id) => `/?tournament_id=${tournament_id}`,
    }),
    createTournamentEvent: builder.mutation<TournamentEvent, TournamentEvent>({
      query: (tournament) => ({
        url: '/',
        method: 'POST',
        body: tournament,
      }),
    }),
    updateTournamentEvent: builder.mutation<TournamentEvent, TournamentEvent>({
      query: (tournament) => ({
        url: `/${tournament.id}`,
        method: 'PATCH',
        body: tournament,
      }),
    }),
    deleteTournamentEvent: builder.mutation<number, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetTournamentEventQuery,
  useGetTournamentEventsByTournamentIdQuery,
  useCreateTournamentEventMutation,
  useUpdateTournamentEventMutation,
  useDeleteTournamentEventMutation,
} = tournamentEventApi;
