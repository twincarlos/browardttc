import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GroupPlayer } from '../../types/groupPlayerType'

interface GroupPlayerState {
  collection: GroupPlayer[]
}

const initialState: GroupPlayerState = {
  collection: [],
}

const groupPlayerSlice = createSlice({
  name: 'groupPlayer',
  initialState,
  reducers: {
    setGroupPlayers: (state, action: PayloadAction<GroupPlayer[]>) => {
      state.collection = action.payload
    },
    addGroupPlayer: (state, action: PayloadAction<GroupPlayer>) => {
      state.collection.push(action.payload)
    },
    updateGroupPlayer: (state, action: PayloadAction<GroupPlayer>) => {
      const index = state.collection.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.collection[index] = action.payload
      }
    },
    deleteGroupPlayer: (state, action: PayloadAction<number>) => {
      state.collection = state.collection.filter(t => t.id !== action.payload)
    },
  },
})

export const {
  setGroupPlayers,
  addGroupPlayer,
  updateGroupPlayer,
  deleteGroupPlayer,
} = groupPlayerSlice.actions

export default groupPlayerSlice.reducer