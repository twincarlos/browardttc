import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { TournamentEvent } from '../../types/tournamentEventType';
import { tournamentEventApi } from '../apis/tournamentEventApi';
import { RootState } from '../index';

const tournamentEventAdapter = createEntityAdapter<TournamentEvent>();
const initialState = tournamentEventAdapter.getInitialState();

const tournamentEventSlice = createSlice({
  name: 'tournamentEvent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentEventApi.endpoints.getTournamentEventsByTournamentId
        .matchFulfilled,
      (state, { payload }) => {
        tournamentEventAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      tournamentEventApi.endpoints.getTournamentEvent.matchFulfilled,
      (state, { payload }) => {
        tournamentEventAdapter.setOne(state, payload);
      },
    );
    builder.addMatcher(
      tournamentEventApi.endpoints.createTournamentEvent.matchFulfilled,
      (state, { payload }) => {
        tournamentEventAdapter.addOne(state, payload);
      },
    );
    builder.addMatcher(
      tournamentEventApi.endpoints.updateTournamentEvent.matchFulfilled,
      (state, { payload }) => {
        tournamentEventAdapter.updateOne(state, {
          id: payload.id,
          changes: payload,
        });
      },
    );
    builder.addMatcher(
      tournamentEventApi.endpoints.deleteTournamentEvent.matchFulfilled,
      (state, { payload }) => {
        tournamentEventAdapter.removeOne(state, payload);
      },
    );
  },
});

export const {
  selectAll: selectAllTournamentEventsByTournamentId,
  selectById: selectTournamentEventById,
  selectIds: selectTournamentEventIdsByTournamentId,
} = tournamentEventAdapter.getSelectors(
  (state: RootState) => state.tournamentEvent,
);

export default tournamentEventSlice.reducer;
