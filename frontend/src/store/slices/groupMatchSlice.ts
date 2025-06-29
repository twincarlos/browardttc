import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GroupMatch } from '../../types/groupMatchType'

interface GroupMatchState {
  collection: GroupMatch[]
  current: GroupMatch | null
}

const initialState: GroupMatchState = {
  collection: [],
  current: null,
}

const groupMatchSlice = createSlice({
  name: 'groupMatch',
  initialState,
  reducers: {
    setGroupMatches: (state, action: PayloadAction<GroupMatch[]>) => {
      state.collection = action.payload
    },
    addGroupMatch: (state, action: PayloadAction<GroupMatch>) => {
      state.collection.push(action.payload)
    },
    updateGroupMatch: (state, action: PayloadAction<GroupMatch>) => {
      const index = state.collection.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.collection[index] = action.payload
      }
    },
    deleteGroupMatch: (state, action: PayloadAction<number>) => {
      state.collection = state.collection.filter(t => t.id !== action.payload)
    },
    setGroupMatch: (state, action: PayloadAction<GroupMatch | null>) => {
      state.current = action.payload
    },
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