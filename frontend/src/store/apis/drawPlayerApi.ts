import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DrawPlayer } from '@/types/drawPlayerType';

export const drawPlayerApi = createApi({
  reducerPath: 'drawPlayerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/draw-player`,
  }),
  endpoints: (builder) => ({
    getDrawPlayers: builder.query<DrawPlayer[], void>({
      query: () => '/',
    }),
    getDrawPlayersByTournamentId: builder.query<DrawPlayer[], string>({
      query: (tournamentId) => `?tournament_id=${tournamentId}`,
    }),
    getDrawPlayersByTournamentEventId: builder.query<DrawPlayer[], string>({
      query: (tournamentEventId) => `?tournament_event_id=${tournamentEventId}`,
    }),
    getDrawPlayersByEventDrawId: builder.query<DrawPlayer[], string>({
      query: (eventDrawId) => `?event_draw_id=${eventDrawId}`,
    }),
    createDrawPlayer: builder.mutation<DrawPlayer, DrawPlayer>({
      query: (drawPlayer) => ({
        url: '/',
        method: 'POST',
        body: drawPlayer,
      }),
    }),
    updateDrawPlayer: builder.mutation<DrawPlayer, DrawPlayer>({
      query: (drawPlayer) => ({
        url: `/${drawPlayer.id}`,
        method: 'PATCH',
        body: drawPlayer,
      }),
    }),
    deleteDrawPlayer: builder.mutation<number, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetDrawPlayersQuery,
  useGetDrawPlayersByTournamentIdQuery,
  useGetDrawPlayersByTournamentEventIdQuery,
  useGetDrawPlayersByEventDrawIdQuery,
  useCreateDrawPlayerMutation,
  useUpdateDrawPlayerMutation,
  useDeleteDrawPlayerMutation,
} = drawPlayerApi;
