import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GroupMatch } from '@/types/groupMatchType';

export const groupMatchApi = createApi({
  reducerPath: 'groupMatchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/group-match`,
  }),
  endpoints: (builder) => ({
    getGroupMatches: builder.query<GroupMatch[], void>({
      query: () => '/',
    }),
    getGroupMatchesByTournamentId: builder.query<GroupMatch[], string>({
      query: (tournamentId) => `?tournament_id=${tournamentId}`,
    }),
    getGroupMatchesByTournamentEventId: builder.query<GroupMatch[], string>({
      query: (tournamentEventId) => `?tournament_event_id=${tournamentEventId}`,
    }),
    getGroupMatchesByEventGroupId: builder.query<GroupMatch[], string>({
      query: (eventGroupId) => `?event_group_id=${eventGroupId}`,
    }),
    createGroupMatch: builder.mutation<GroupMatch, GroupMatch>({
      query: (groupMatch) => ({
        url: '/',
        method: 'POST',
        body: groupMatch,
      }),
    }),
    updateGroupMatch: builder.mutation<GroupMatch, GroupMatch>({
      query: (groupMatch) => ({
        url: `/${groupMatch.id}`,
        method: 'PATCH',
        body: groupMatch,
      }),
    }),
    deleteGroupMatch: builder.mutation<number, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetGroupMatchesQuery,
  useGetGroupMatchesByTournamentIdQuery,
  useGetGroupMatchesByTournamentEventIdQuery,
  useGetGroupMatchesByEventGroupIdQuery,
  useCreateGroupMatchMutation,
  useUpdateGroupMatchMutation,
  useDeleteGroupMatchMutation,
} = groupMatchApi;
