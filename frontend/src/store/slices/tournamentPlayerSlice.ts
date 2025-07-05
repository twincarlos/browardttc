import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { TournamentPlayer } from '../../types/tournamentPlayerType';
import { tournamentPlayerApi } from '../apis/tournamentPlayerApi';
import { RootState } from '../index';

const tournamentPlayerAdapter = createEntityAdapter<TournamentPlayer>();
const initialState = tournamentPlayerAdapter.getInitialState();

const tournamentPlayerSlice = createSlice({
  name: 'tournamentPlayer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentPlayerApi.endpoints.getTournamentPlayers.matchFulfilled,
      (state, { payload }) => {
        tournamentPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      tournamentPlayerApi.endpoints.getTournamentPlayersByTournamentId.matchFulfilled,
      (state, { payload }) => {
        tournamentPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      tournamentPlayerApi.endpoints.getTournamentPlayersByTournamentEventId.matchFulfilled,
      (state, { payload }) => {
        tournamentPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      tournamentPlayerApi.endpoints.createTournamentPlayer.matchFulfilled,
      (state, { payload }) => {
        tournamentPlayerAdapter.addOne(state, payload);
      },
    );
    builder.addMatcher(
      tournamentPlayerApi.endpoints.updateTournamentPlayer.matchFulfilled,
      (state, { payload }) => {
        tournamentPlayerAdapter.updateOne(state, {
          id: payload.id,
          changes: payload,
        });
      },
    );
    builder.addMatcher(
      tournamentPlayerApi.endpoints.deleteTournamentPlayer.matchFulfilled,
      (state, { payload }) => {
        tournamentPlayerAdapter.removeOne(state, payload);
      },
    );
  },
});

export const { selectById: selectTournamentPlayerById } =
  tournamentPlayerAdapter.getSelectors((state: RootState) => state.tournamentPlayer);

export default tournamentPlayerSlice.reducer;
