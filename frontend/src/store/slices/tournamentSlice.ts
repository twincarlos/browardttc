import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { Tournament } from '../../types/tournamentType';
import { tournamentApi } from '../apis/tournamentApi';
import { RootState } from '../index';

const tournamentsAdapter = createEntityAdapter<Tournament>();
const initialState = tournamentsAdapter.getInitialState({
  currentTournamentId: null as number | null,
});

const tournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    setCurrentTournament: (state, action) => {
      state.currentTournamentId = action.payload;
    },
    clearCurrentTournament: (state) => {
      state.currentTournamentId = null;
    },
  },
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
        state.currentTournamentId = payload.id;
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
        if (state.currentTournamentId === payload) {
          state.currentTournamentId = null;
        }
      },
    );
  },
});

export const { setCurrentTournament, clearCurrentTournament } = tournamentSlice.actions;

export const {
  selectById: selectTournamentById,
  selectIds: selectTournamentIds,
  selectEntities: selectAllTournaments,
} = tournamentsAdapter.getSelectors((state: RootState) => state.tournament);

export const selectCurrentTournament = (state: RootState) => {
  if (!state.tournament.currentTournamentId) {
    return null;
  }
  return selectTournamentById(state, state.tournament.currentTournamentId);
};

export const selectCurrentTournamentId = (state: RootState) => 
  state.tournament.currentTournamentId;

export default tournamentSlice.reducer;
