import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GroupMatch } from '../../types/groupMatchType'
import { tournamentApi } from '../apis/tournamentApi'

interface GroupMatchState {
  groupMatches: GroupMatch[]
  groupMatch: GroupMatch | null
}

const initialState: GroupMatchState = {
  groupMatches: [],
  groupMatch: null,
}

const groupMatchSlice = createSlice({
  name: 'groupMatch',
  initialState,
  reducers: {
    setGroupMatches: (state, action: PayloadAction<GroupMatch[]>) => {
      state.groupMatches = action.payload
    },
    addGroupMatch: (state, action: PayloadAction<GroupMatch>) => {
      state.groupMatches.push(action.payload)
    },
    updateGroupMatch: (state, action: PayloadAction<GroupMatch>) => {
      const index = state.groupMatches.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.groupMatches[index] = action.payload
      }
    },
    deleteGroupMatch: (state, action: PayloadAction<number>) => {
      state.groupMatches = state.groupMatches.filter(t => t.id !== action.payload)
    },
    setGroupMatch: (state, action: PayloadAction<GroupMatch | null>) => {
      state.groupMatch = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.groupMatches = action.payload.groupMatches
      }
    )
  },
})

export const {
  setGroupMatches,
  addGroupMatch,
  updateGroupMatch,
  deleteGroupMatch,
  setGroupMatch,
} = groupMatchSlice.actions

export default groupMatchSlice.reducer