import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GroupPlayer } from '@/types/groupPlayerType';

export const groupPlayerApi = createApi({
  reducerPath: 'groupPlayerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/group-player`,
  }),
  endpoints: (builder) => ({
    getGroupPlayers: builder.query<GroupPlayer[], void>({
      query: () => '/',
    }),
    getGroupPlayersByTournamentId: builder.query<GroupPlayer[], string>({
      query: (tournamentId) => `?tournament_id=${tournamentId}`,
    }),
    getGroupPlayersByTournamentEventId: builder.query<GroupPlayer[], string>({
      query: (tournamentEventId) => `?tournament_event_id=${tournamentEventId}`,
    }),
    getGroupPlayersByEventGroupId: builder.query<GroupPlayer[], string>({
      query: (eventGroupId) => `?event_group_id=${eventGroupId}`,
    }),
    createGroupPlayer: builder.mutation<GroupPlayer, GroupPlayer>({
      query: (groupPlayer) => ({
        url: '/',
        method: 'POST',
        body: groupPlayer,
      }),
    }),
    updateGroupPlayer: builder.mutation<GroupPlayer, GroupPlayer>({
      query: (groupPlayer) => ({
        url: `/${groupPlayer.id}`,
        method: 'PATCH',
        body: groupPlayer,
      }),
    }),
    deleteGroupPlayer: builder.mutation<number, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetGroupPlayersQuery,
  useGetGroupPlayersByTournamentIdQuery,
  useGetGroupPlayersByTournamentEventIdQuery,
  useGetGroupPlayersByEventGroupIdQuery,
  useCreateGroupPlayerMutation,
  useUpdateGroupPlayerMutation,
  useDeleteGroupPlayerMutation,
} = groupPlayerApi;
