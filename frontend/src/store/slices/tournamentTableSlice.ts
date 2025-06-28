import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TournamentTable } from '../../types/tournamentTableType'
import { tournamentApi } from '../apis/tournamentApi'

interface TournamentTableState {
  tournamentTables: TournamentTable[]
}

const initialState: TournamentTableState = {
  tournamentTables: [],
}

const tournamentTableSlice = createSlice({
  name: 'tournamentTable',
  initialState,
  reducers: {
    setTournamentTables: (state, action: PayloadAction<TournamentTable[]>) => {
      state.tournamentTables = action.payload
    },
    addTournamentTable: (state, action: PayloadAction<TournamentTable>) => {
      state.tournamentTables.push(action.payload)
    },
    updateTournamentTable: (state, action: PayloadAction<TournamentTable>) => {
      const index = state.tournamentTables.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.tournamentTables[index] = action.payload
      }
    },
    deleteTournamentTable: (state, action: PayloadAction<number>) => {
      state.tournamentTables = state.tournamentTables.filter(t => t.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.tournamentTables = action.payload.tournamentTables
      }
    )
  },
})

export const {
  setTournamentTables,
  addTournamentTable,
  updateTournamentTable,
  deleteTournamentTable,
} = tournamentTableSlice.actions

export default tournamentTableSlice.reducer 