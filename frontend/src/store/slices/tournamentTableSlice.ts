import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { TournamentTable } from '../../types/tournamentTableType';
import { RootState } from '../index';

const tournamentTableAdapter = createEntityAdapter<TournamentTable>();
const initialState = tournamentTableAdapter.getInitialState();

const tournamentTableSlice = createSlice({
  name: 'tournamentTable',
  initialState,
  reducers: {
    setTournamentTables: (state, action) => {
      tournamentTableAdapter.setAll(state, action.payload);
    },
    addTournamentTable: (state, action) => {
      tournamentTableAdapter.addOne(state, action.payload);
    },
    updateTournamentTable: (state, action) => {
      tournamentTableAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      });
    },
    deleteTournamentTable: (state, action) => {
      tournamentTableAdapter.removeOne(state, action.payload);
    },
  },
});

export const {
  setTournamentTables,
  addTournamentTable,
  updateTournamentTable,
  deleteTournamentTable,
} = tournamentTableSlice.actions;

export const {
  selectById: selectTournamentTableById,
  selectIds: selectTournamentTableIds,
  selectEntities: selectAllTournamentTables,
} = tournamentTableAdapter.getSelectors((state: RootState) => state.tournamentTable);

export default tournamentTableSlice.reducer;
