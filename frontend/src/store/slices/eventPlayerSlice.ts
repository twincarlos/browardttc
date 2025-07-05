import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { EventPlayer } from '../../types/eventPlayerType'
import { eventPlayerApi } from '../apis/eventPlayerApi';
import { RootState } from '../index';

const eventPlayerAdapter = createEntityAdapter<EventPlayer>();
const initialState = eventPlayerAdapter.getInitialState();

const eventPlayerSlice = createSlice({
  name: 'eventPlayer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      eventPlayerApi.endpoints.getEventPlayers.matchFulfilled,
      (state, { payload }) => {
        eventPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      eventPlayerApi.endpoints.getEventPlayersByTournamentId.matchFulfilled,
      (state, { payload }) => {
        eventPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      eventPlayerApi.endpoints.getEventPlayersByTournamentEventId.matchFulfilled,
      (state, { payload }) => {
        eventPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      eventPlayerApi.endpoints.createEventPlayer.matchFulfilled,
      (state, { payload }) => {
        eventPlayerAdapter.addOne(state, payload);
      },
    );
    builder.addMatcher(
      eventPlayerApi.endpoints.updateEventPlayer.matchFulfilled,
      (state, { payload }) => {
        eventPlayerAdapter.updateOne(state, {
          id: payload.id,
          changes: payload,
        });
      },
    );
    builder.addMatcher(
      eventPlayerApi.endpoints.deleteEventPlayer.matchFulfilled,
      (state, { payload }) => {
        eventPlayerAdapter.removeOne(state, payload);
      },
    );
  },
})

export const { selectById: selectEventPlayerById } = eventPlayerAdapter.getSelectors((state: RootState) => state.eventPlayer);

export default eventPlayerSlice.reducer