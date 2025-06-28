import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DrawPlayer } from '../../types/drawPlayerType'
import { tournamentApi } from '../apis/tournamentApi'

interface DrawPlayerState {
  drawPlayers: DrawPlayer[]
}

const initialState: DrawPlayerState = {
  drawPlayers: [],
}

const drawPlayerSlice = createSlice({
  name: 'drawPlayer',
  initialState,
  reducers: {
    setDrawPlayers: (state, action: PayloadAction<DrawPlayer[]>) => {
      state.drawPlayers = action.payload
    },
    addDrawPlayer: (state, action: PayloadAction<DrawPlayer>) => {
      state.drawPlayers.push(action.payload)
    },
    updateDrawPlayer: (state, action: PayloadAction<DrawPlayer>) => {
      const index = state.drawPlayers.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.drawPlayers[index] = action.payload
      }
    },
    deleteDrawPlayer: (state, action: PayloadAction<number>) => {
      state.drawPlayers = state.drawPlayers.filter(t => t.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.drawPlayers = action.payload.drawPlayers
      }
    )
  },
})

export const {
  setDrawPlayers,
  addDrawPlayer,
  updateDrawPlayer,
  deleteDrawPlayer,
} = drawPlayerSlice.actions

export default drawPlayerSlice.reducer 