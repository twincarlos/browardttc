import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DrawMatch } from '@/types/drawMatchType';

export const drawMatchApi = createApi({
  reducerPath: 'drawMatchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/draw-match`,
  }),
  endpoints: (builder) => ({
    getDrawMatches: builder.query<DrawMatch[], void>({
      query: () => '/',
    }),
    getDrawMatchesByTournamentId: builder.query<DrawMatch[], string>({
      query: (tournamentId) => `?tournament_id=${tournamentId}`,
    }),
    getDrawMatchesByTournamentEventId: builder.query<DrawMatch[], string>({
      query: (tournamentEventId) => `?tournament_event_id=${tournamentEventId}`,
    }),
    getDrawMatchesByEventDrawId: builder.query<DrawMatch[], string>({
      query: (eventDrawId) => `?event_draw_id=${eventDrawId}`,
    }),
    createDrawMatch: builder.mutation<DrawMatch, DrawMatch>({
      query: (drawMatch) => ({
        url: '/',
        method: 'POST',
        body: drawMatch,
      }),
    }),
    updateDrawMatch: builder.mutation<DrawMatch, DrawMatch>({
      query: (drawMatch) => ({
        url: `/${drawMatch.id}`,
        method: 'PATCH',
        body: drawMatch,
      }),
    }),
    deleteDrawMatch: builder.mutation<number, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetDrawMatchesQuery,
  useGetDrawMatchesByTournamentIdQuery,
  useGetDrawMatchesByTournamentEventIdQuery,
  useGetDrawMatchesByEventDrawIdQuery,
  useCreateDrawMatchMutation,
  useUpdateDrawMatchMutation,
  useDeleteDrawMatchMutation,
} = drawMatchApi;
