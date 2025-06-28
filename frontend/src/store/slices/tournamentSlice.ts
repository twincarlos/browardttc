import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tournament } from '../../types/tournamentType'

interface TournamentState {
  tournaments: Tournament[]
  tournament: Tournament | null
}

const initialState: TournamentState = {
  tournaments: [],
  tournament: null,
}

const tournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    setTournaments: (state, action: PayloadAction<Tournament[]>) => {
      state.tournaments = action.payload
    },
    addTournament: (state, action: PayloadAction<Tournament>) => {
      state.tournaments.push(action.payload)
    },
    updateTournament: (state, action: PayloadAction<Tournament>) => {
      const index = state.tournaments.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.tournaments[index] = action.payload
      }
    },
    deleteTournament: (state, action: PayloadAction<number>) => {
      state.tournaments = state.tournaments.filter(t => t.id !== action.payload)
    },
    setTournament: (state, action: PayloadAction<Tournament | null>) => {
      state.tournament = action.payload
    },
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