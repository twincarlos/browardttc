import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { TournamentPlayer } from '../../types/tournamentPlayerType';
import { RootState } from '../index';

const tournamentPlayerAdapter = createEntityAdapter<TournamentPlayer>();
const initialState = tournamentPlayerAdapter.getInitialState();

const tournamentPlayerSlice = createSlice({
  name: 'tournamentPlayer',
  initialState,
  reducers: {
    setTournamentPlayers: (state, action) => {
      tournamentPlayerAdapter.setAll(state, action.payload);
    },
    addTournamentPlayer: (state, action) => {
      tournamentPlayerAdapter.addOne(state, action.payload);
    },
    updateTournamentPlayer: (state, action) => {
      tournamentPlayerAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      });
    },
    deleteTournamentPlayer: (state, action) => {
      tournamentPlayerAdapter.removeOne(state, action.payload);
    },
  },
});

export const { selectById: selectTournamentPlayerById } =
  tournamentPlayerAdapter.getSelectors(
    (state: RootState) => state.tournamentPlayer,
  );

export default tournamentPlayerSlice.reducer;
