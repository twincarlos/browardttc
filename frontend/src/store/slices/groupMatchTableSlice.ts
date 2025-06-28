import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GroupMatchTable } from '../../types/groupMatchTableType'
import { tournamentApi } from '../apis/tournamentApi'

interface GroupMatchTableState {
  collection: GroupMatchTable[]
}

const initialState: GroupMatchTableState = {
  collection: [],
}

const groupMatchSlice = createSlice({
  name: 'groupMatchTable',
  initialState,
  reducers: {
    setGroupMatchTables: (state, action: PayloadAction<GroupMatchTable[]>) => {
      state.collection = action.payload
    },
    addGroupMatchTable: (state, action: PayloadAction<GroupMatchTable>) => {
      state.collection.push(action.payload)
    },
    updateGroupMatchTable: (state, action: PayloadAction<GroupMatchTable>) => {
      const index = state.collection.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.collection[index] = action.payload
      }
    },
    deleteGroupMatchTable: (state, action: PayloadAction<number>) => {
      state.collection = state.collection.filter(t => t.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.collection = action.payload.groupMatchTables
      }
    )
  },
})

export const {
  setGroupMatchTables,
  addGroupMatchTable,
  updateGroupMatchTable,
  deleteGroupMatchTable,
} = groupMatchSlice.actions

export default groupMatchSlice.reducer