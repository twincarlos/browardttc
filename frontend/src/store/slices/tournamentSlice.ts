import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tournament } from '../../types/tournamentType'
import { tournamentApi } from '../apis/tournamentApi'

interface TournamentState {
  collection: Tournament[]
  current: Tournament | null
}

const initialState: TournamentState = {
  collection: [],
  current: null,
}

const tournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    setTournaments: (state, action: PayloadAction<Tournament[]>) => {
      state.collection = action.payload
    },
    addTournament: (state, action: PayloadAction<Tournament>) => {
      state.collection.push(action.payload)
    },
    updateTournament: (state, action: PayloadAction<Tournament>) => {
      const index = state.collection.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.collection[index] = action.payload
      }
    },
    deleteTournament: (state, action: PayloadAction<number>) => {
      state.collection = state.collection.filter(t => t.id !== action.payload)
    },
    setTournament: (state, action: PayloadAction<Tournament | null>) => {
      state.current = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.current = action.payload.tournament
      }
    )
  },
})

export const {
  setTournaments,
  addTournament,
  updateTournament,
  deleteTournament,
  setTournament,
} = tournamentSlice.actions

export default tournamentSlice.reducer