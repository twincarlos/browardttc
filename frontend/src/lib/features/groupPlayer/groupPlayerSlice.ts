import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GroupPlayer } from './groupPlayerType'

interface GroupPlayerState {
  groupPlayers: GroupPlayer[]
}

const initialState: GroupPlayerState = {
  groupPlayers: [],
}

const groupPlayerSlice = createSlice({
  name: 'groupPlayer',
  initialState,
  reducers: {
    setGroupPlayers: (state, action: PayloadAction<GroupPlayer[]>) => {
      state.groupPlayers = action.payload
    },
    addGroupPlayer: (state, action: PayloadAction<GroupPlayer>) => {
      state.groupPlayers.push(action.payload)
    },
    updateGroupPlayer: (state, action: PayloadAction<GroupPlayer>) => {
      const index = state.groupPlayers.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.groupPlayers[index] = action.payload
      }
    },
    deleteGroupPlayer: (state, action: PayloadAction<number>) => {
      state.groupPlayers = state.groupPlayers.filter(t => t.id !== action.payload)
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