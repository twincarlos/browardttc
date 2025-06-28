import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DrawMatchTable } from '../../types/drawMatchTableType'

interface DrawMatchTableState {
  drawMatchTables: DrawMatchTable[]
}

const initialState: DrawMatchTableState = {
  drawMatchTables: [],
}

const drawMatchTableSlice = createSlice({
  name: 'drawMatchTable',
  initialState,
  reducers: {
    setDrawMatchTables: (state, action: PayloadAction<DrawMatchTable[]>) => {
      state.drawMatchTables = action.payload
    },
    addDrawMatchTable: (state, action: PayloadAction<DrawMatchTable>) => {
      state.drawMatchTables.push(action.payload)
    },
    updateDrawMatchTable: (state, action: PayloadAction<DrawMatchTable>) => {
      const index = state.drawMatchTables.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.drawMatchTables[index] = action.payload
      }
    },
    deleteDrawMatchTable: (state, action: PayloadAction<number>) => {
      state.drawMatchTables = state.drawMatchTables.filter(t => t.id !== action.payload)
    },
  },
})

export const {
  setDrawMatchTables,
  addDrawMatchTable,
  updateDrawMatchTable,
  deleteDrawMatchTable,
} = drawMatchTableSlice.actions

export default drawMatchTableSlice.reducer