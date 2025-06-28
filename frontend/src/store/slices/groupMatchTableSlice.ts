import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GroupMatchTable } from '../../types/groupMatchTableType'
import { tournamentApi } from '../apis/tournamentApi'

interface GroupMatchTableState {
  groupMatchTables: GroupMatchTable[]
}

const initialState: GroupMatchTableState = {
  groupMatchTables: [],
}

const groupMatchSlice = createSlice({
  name: 'groupMatchTable',
  initialState,
  reducers: {
    setGroupMatchTables: (state, action: PayloadAction<GroupMatchTable[]>) => {
      state.groupMatchTables = action.payload
    },
    addGroupMatchTable: (state, action: PayloadAction<GroupMatchTable>) => {
      state.groupMatchTables.push(action.payload)
    },
    updateGroupMatchTable: (state, action: PayloadAction<GroupMatchTable>) => {
      const index = state.groupMatchTables.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.groupMatchTables[index] = action.payload
      }
    },
    deleteGroupMatchTable: (state, action: PayloadAction<number>) => {
      state.groupMatchTables = state.groupMatchTables.filter(t => t.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.groupMatchTables = action.payload.groupMatchTables
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