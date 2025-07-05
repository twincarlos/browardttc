import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { Tournament } from '../../types/tournamentType';
import { tournamentApi } from '../apis/tournamentApi';
import { RootState } from '../index';

const tournamentsAdapter = createEntityAdapter<Tournament>();
const initialState = tournamentsAdapter.getInitialState();

const tournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournaments.matchFulfilled,
      (state, { payload }) => {
        tournamentsAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      tournamentApi.endpoints.getTournament.matchFulfilled,
      (state, { payload }) => {
        tournamentsAdapter.setOne(state, payload);
      },
    );
    builder.addMatcher(
      tournamentApi.endpoints.createTournament.matchFulfilled,
      (state, { payload }) => {
        tournamentsAdapter.addOne(state, payload);
      },
    );
    builder.addMatcher(
      tournamentApi.endpoints.updateTournament.matchFulfilled,
      (state, { payload }) => {
        tournamentsAdapter.updateOne(state, {
          id: payload.id,
          changes: payload,
        });
      },
    );
    builder.addMatcher(
      tournamentApi.endpoints.deleteTournament.matchFulfilled,
      (state, { payload }) => {
        tournamentsAdapter.removeOne(state, payload);
      },
    );
  },
});

export const {
  selectById: selectTournamentById,
  selectEntities: selectAllTournaments,
} = tournamentsAdapter.getSelectors((state: RootState) => state.tournament);

export default tournamentSlice.reducer;