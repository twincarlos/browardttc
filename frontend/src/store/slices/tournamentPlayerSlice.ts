import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TournamentPlayer } from '../../types/tournamentPlayerType'
import { tournamentApi } from '../apis/tournamentApi'

interface TournamentPlayerState {
  collection: TournamentPlayer[]
}

const initialState: TournamentPlayerState = {
  collection: [],
}

const tournamentPlayerSlice = createSlice({
  name: 'tournamentPlayer',
  initialState,
  reducers: {
    setTournamentPlayers: (state, action: PayloadAction<TournamentPlayer[]>) => {
      state.collection = action.payload
    },
    addTournamentPlayer: (state, action: PayloadAction<TournamentPlayer>) => {
      state.collection.push(action.payload)
    },
    updateTournamentPlayer: (state, action: PayloadAction<TournamentPlayer>) => {
      const index = state.collection.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.collection[index] = action.payload
      }
    },
    deleteTournamentPlayer: (state, action: PayloadAction<number>) => {
      state.collection = state.collection.filter(t => t.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.collection = action.payload.tournamentPlayers
      }
    )
  },
})

export const {
  setTournamentPlayers,
  addTournamentPlayer,
  updateTournamentPlayer,
  deleteTournamentPlayer,
} = tournamentPlayerSlice.actions

export default tournamentPlayerSlice.reducer