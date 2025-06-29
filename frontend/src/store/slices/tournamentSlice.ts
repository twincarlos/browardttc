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
      (state, action) => {
        tournamentsAdapter.setAll(state, action.payload);
      },
    );
    builder.addMatcher(
      tournamentApi.endpoints.getTournament.matchFulfilled,
      (state, action) => {
        tournamentsAdapter.setOne(state, action.payload);
      },
    );
    builder.addMatcher(
      tournamentApi.endpoints.createTournament.matchFulfilled,
      (state, action) => {
        tournamentsAdapter.addOne(state, action.payload);
      },
    );
    builder.addMatcher(
      tournamentApi.endpoints.updateTournament.matchFulfilled,
      (state, action) => {
        tournamentsAdapter.updateOne(state, {
          id: action.payload.id,
          changes: action.payload,
        });
      },
    );
    builder.addMatcher(
      tournamentApi.endpoints.deleteTournament.matchFulfilled,
      (state, action) => {
        tournamentsAdapter.removeOne(
          state,
          Number(action.meta.arg.originalArgs),
        );
      },
    );
  },
});

export const {
  selectAll: selectAllTournaments,
  selectById: selectTournamentById,
  selectIds: selectTournamentIds,
} = tournamentsAdapter.getSelectors((state: RootState) => state.tournament);

export default tournamentSlice.reducer;