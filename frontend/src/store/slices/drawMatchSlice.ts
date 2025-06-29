import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DrawMatch } from '../../types/drawMatchType'

interface DrawMatchState {
  collection: DrawMatch[]
  current: DrawMatch | null
}

const initialState: DrawMatchState = {
  collection: [],
  current: null,
}

const drawMatchSlice = createSlice({
  name: 'drawMatch',
  initialState,
  reducers: {
    setDrawMatches: (state, action: PayloadAction<DrawMatch[]>) => {
      state.collection = action.payload
    },
    addDrawMatch: (state, action: PayloadAction<DrawMatch>) => {
      state.collection.push(action.payload)
    },
    updateDrawMatch: (state, action: PayloadAction<DrawMatch>) => {
      const index = state.collection.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.collection[index] = action.payload
      }
    },
    deleteDrawMatch: (state, action: PayloadAction<number>) => {
      state.collection = state.collection.filter(t => t.id !== action.payload)
    },
    setDrawMatch: (state, action: PayloadAction<DrawMatch | null>) => {
      state.current = action.payload
    },
  },
})

export const {
  setDrawMatches,
  addDrawMatch,
  updateDrawMatch,
  deleteDrawMatch,
  setDrawMatch,
} = drawMatchSlice.actions

export default drawMatchSlice.reducer