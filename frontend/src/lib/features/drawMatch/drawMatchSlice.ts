import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DrawMatch } from './drawMatchType'

interface DrawMatchState {
  drawMatches: DrawMatch[]
}

const initialState: DrawMatchState = {
  drawMatches: [],
}

const drawMatchSlice = createSlice({
  name: 'drawMatch',
  initialState,
  reducers: {
    setDrawMatches: (state, action: PayloadAction<DrawMatch[]>) => {
      state.drawMatches = action.payload
    },
    addDrawMatch: (state, action: PayloadAction<DrawMatch>) => {
      state.drawMatches.push(action.payload)
    },
    updateDrawMatch: (state, action: PayloadAction<DrawMatch>) => {
      const index = state.drawMatches.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.drawMatches[index] = action.payload
      }
    },
    deleteDrawMatch: (state, action: PayloadAction<number>) => {
      state.drawMatches = state.drawMatches.filter(t => t.id !== action.payload)
    },
  },
})

export const {
  setDrawMatches,
  addDrawMatch,
  updateDrawMatch,
  deleteDrawMatch,
} = drawMatchSlice.actions

export default drawMatchSlice.reducer