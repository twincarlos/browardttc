import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { EventDraw } from '@/types/eventDrawType';

export const eventDrawApi = createApi({
  reducerPath: 'eventDrawApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/event-draw`,
  }),
  endpoints: (builder) => ({
    getEventDraws: builder.query<EventDraw[], void>({
      query: () => '/',
    }),
    getEventDrawsByTournamentId: builder.query<EventDraw[], string>({
      query: (tournamentId) => `?tournament_id=${tournamentId}`,
    }),
    getEventDrawsByTournamentEventId: builder.query<EventDraw[], string>({
      query: (tournamentEventId) => `?tournament_event_id=${tournamentEventId}`,
    }),
    createEventDraw: builder.mutation<EventDraw, EventDraw>({
      query: (eventDraw) => ({
        url: '/',
        method: 'POST',
        body: eventDraw,
      }),
    }),
    updateEventDraw: builder.mutation<EventDraw, EventDraw>({
      query: (eventDraw) => ({
        url: `/${eventDraw.id}`,
        method: 'PATCH',
        body: eventDraw,
      }),
    }),
    deleteEventDraw: builder.mutation<number, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetEventDrawsQuery,
  useGetEventDrawsByTournamentIdQuery,
  useGetEventDrawsByTournamentEventIdQuery,
  useCreateEventDrawMutation,
  useUpdateEventDrawMutation,
  useDeleteEventDrawMutation,
} = eventDrawApi;