import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { EventGroup } from '@/types/eventGroupType';

export const eventGroupApi = createApi({
  reducerPath: 'eventGroupApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/event-group`,
  }),
  endpoints: (builder) => ({
    getEventGroups: builder.query<EventGroup[], void>({
      query: () => '/',
    }),
    getEventGroupsByTournamentId: builder.query<EventGroup[], string>({
      query: (tournamentId) => `?tournament_id=${tournamentId}`,
    }),
    getEventGroupsByTournamentEventId: builder.query<EventGroup[], string>({
      query: (tournamentEventId) => `?tournament_event_id=${tournamentEventId}`,
    }),
    createEventGroup: builder.mutation<EventGroup, EventGroup>({
      query: (eventGroup) => ({
        url: '/',
        method: 'POST',
        body: eventGroup,
      }),
    }),
    updateEventGroup: builder.mutation<EventGroup, EventGroup>({
      query: (eventGroup) => ({
        url: `/${eventGroup.id}`,
        method: 'PATCH',
        body: eventGroup,
      }),
    }),
    deleteEventGroup: builder.mutation<number, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetEventGroupsQuery,
  useGetEventGroupsByTournamentIdQuery,
  useGetEventGroupsByTournamentEventIdQuery,
  useCreateEventGroupMutation,
  useUpdateEventGroupMutation,
  useDeleteEventGroupMutation,
} = eventGroupApi;