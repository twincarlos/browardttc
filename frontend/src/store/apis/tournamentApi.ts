import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Tournament } from '../../types/tournamentType';

export const tournamentApi = createApi({
  reducerPath: 'tournamentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/tournament`,
  }),
  endpoints: (builder) => ({
    getTournament: builder.query<Tournament, string>({
      query: (id) => `/${id}`,
    }),
    getTournaments: builder.query<Tournament[], void>({
      query: () => '/',
    }),
    createTournament: builder.mutation<Tournament, Tournament>({
      query: (tournament) => ({
        url: '/',
        method: 'POST',
        body: tournament,
      }),
    }),
    updateTournament: builder.mutation<Tournament, Tournament>({
      query: (tournament) => ({
        url: `/${tournament.id}`,
        method: 'PATCH',
        body: tournament,
      }),
    }),
    deleteTournament: builder.mutation<number, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetTournamentQuery,
  useGetTournamentsQuery,
  useCreateTournamentMutation,
  useUpdateTournamentMutation,
  useDeleteTournamentMutation,
} = tournamentApi;
