import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DrawMatch } from '../../types/drawMatchType'
import { tournamentApi } from '../apis/tournamentApi'

interface DrawMatchState {
  drawMatches: DrawMatch[]
  drawMatch: DrawMatch | null
}

const initialState: DrawMatchState = {
  drawMatches: [],
  drawMatch: null,
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
    setDrawMatch: (state, action: PayloadAction<DrawMatch | null>) => {
      state.drawMatch = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.drawMatches = action.payload.drawMatches
      }
    )
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