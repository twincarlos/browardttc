import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DrawMatchTable } from '../../types/drawMatchTableType'
import { tournamentApi } from '../apis/tournamentApi'

interface DrawMatchTableState {
  collection: DrawMatchTable[]
}

const initialState: DrawMatchTableState = {
  collection: [],
}

const drawMatchTableSlice = createSlice({
  name: 'drawMatchTable',
  initialState,
  reducers: {
    setDrawMatchTables: (state, action: PayloadAction<DrawMatchTable[]>) => {
      state.collection = action.payload
    },
    addDrawMatchTable: (state, action: PayloadAction<DrawMatchTable>) => {
      state.collection.push(action.payload)
    },
    updateDrawMatchTable: (state, action: PayloadAction<DrawMatchTable>) => {
      const index = state.collection.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.collection[index] = action.payload
      }
    },
    deleteDrawMatchTable: (state, action: PayloadAction<number>) => {
      state.collection = state.collection.filter(t => t.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.collection = action.payload.drawMatchTables
      }
    )
  },
})

export const {
  setDrawMatchTables,
  addDrawMatchTable,
  updateDrawMatchTable,
  deleteDrawMatchTable,
} = drawMatchTableSlice.actions

export default drawMatchTableSlice.reducer