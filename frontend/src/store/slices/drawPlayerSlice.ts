import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DrawPlayer } from '../../types/drawPlayerType'
import { tournamentApi } from '../apis/tournamentApi'

interface DrawPlayerState {
  collection: DrawPlayer[]
}

const initialState: DrawPlayerState = {
  collection: [],
}

const drawPlayerSlice = createSlice({
  name: 'drawPlayer',
  initialState,
  reducers: {
    setDrawPlayers: (state, action: PayloadAction<DrawPlayer[]>) => {
      state.collection = action.payload
    },
    addDrawPlayer: (state, action: PayloadAction<DrawPlayer>) => {
      state.collection.push(action.payload)
    },
    updateDrawPlayer: (state, action: PayloadAction<DrawPlayer>) => {
      const index = state.collection.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.collection[index] = action.payload
      }
    },
    deleteDrawPlayer: (state, action: PayloadAction<number>) => {
      state.collection = state.collection.filter(t => t.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.collection = action.payload.drawPlayers
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