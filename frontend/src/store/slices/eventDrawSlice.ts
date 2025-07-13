import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { EventDraw } from '@/types/eventDrawType';
import { eventDrawApi } from '../apis/eventDrawApi';
import { RootState } from '@/store/index';

const eventDrawAdapter = createEntityAdapter<EventDraw>();
const initialState = eventDrawAdapter.getInitialState();

const eventDrawSlice = createSlice({
  name: 'eventDraw',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      eventDrawApi.endpoints.getEventDraws.matchFulfilled,
      (state, { payload }) => {
        eventDrawAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      eventDrawApi.endpoints.getEventDrawsByTournamentId.matchFulfilled,
      (state, { payload }) => {
        eventDrawAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      eventDrawApi.endpoints.getEventDrawsByTournamentEventId.matchFulfilled,
      (state, { payload }) => {
        eventDrawAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      eventDrawApi.endpoints.createEventDraw.matchFulfilled,
      (state, { payload }) => {
        eventDrawAdapter.addOne(state, payload);
      },
    );
    builder.addMatcher(
      eventDrawApi.endpoints.updateEventDraw.matchFulfilled,
      (state, { payload }) => {
        eventDrawAdapter.updateOne(state, {
          id: payload.id,
          changes: payload,
        });
      },
    );
    builder.addMatcher(
      eventDrawApi.endpoints.deleteEventDraw.matchFulfilled,
      (state, { payload }) => {
        eventDrawAdapter.removeOne(state, payload);
      },
    );
  },
});

export const { selectEntities: selectAllEventDrawsByTournamentEventId } =
  eventDrawAdapter.getSelectors((state: RootState) => state.eventDraw);
export default eventDrawSlice.reducer;
