import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TournamentTable } from '../../types/tournamentTableType'
import { tournamentApi } from '../apis/tournamentApi'

interface TournamentTableState {
  collection: TournamentTable[]
}

const initialState: TournamentTableState = {
  collection: [],
}

const tournamentTableSlice = createSlice({
  name: 'tournamentTable',
  initialState,
  reducers: {
    setTournamentTables: (state, action: PayloadAction<TournamentTable[]>) => {
      state.collection = action.payload
    },
    addTournamentTable: (state, action: PayloadAction<TournamentTable>) => {
      state.collection.push(action.payload)
    },
    updateTournamentTable: (state, action: PayloadAction<TournamentTable>) => {
      const index = state.collection.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.collection[index] = action.payload
      }
    },
    deleteTournamentTable: (state, action: PayloadAction<number>) => {
      state.collection = state.collection.filter(t => t.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.collection = action.payload.tournamentTables
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