import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TournamentPlayer } from './tournamentPlayerType'

interface TournamentPlayerState {
  tournamentPlayers: TournamentPlayer[]
}

const initialState: TournamentPlayerState = {
  tournamentPlayers: [],
}

const tournamentPlayerSlice = createSlice({
  name: 'tournamentPlayer',
  initialState,
  reducers: {
    setTournamentPlayers: (state, action: PayloadAction<TournamentPlayer[]>) => {
      state.tournamentPlayers = action.payload
    },
    addTournamentPlayer: (state, action: PayloadAction<TournamentPlayer>) => {
      state.tournamentPlayers.push(action.payload)
    },
    updateTournamentPlayer: (state, action: PayloadAction<TournamentPlayer>) => {
      const index = state.tournamentPlayers.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.tournamentPlayers[index] = action.payload
      }
    },
    deleteTournamentPlayer: (state, action: PayloadAction<number>) => {
      state.tournamentPlayers = state.tournamentPlayers.filter(t => t.id !== action.payload)
    },
  },
})

export const {
  setTournamentPlayers,
  addTournamentPlayer,
  updateTournamentPlayer,
  deleteTournamentPlayer,
} = tournamentPlayerSlice.actions

export default tournamentPlayerSlice.reducer