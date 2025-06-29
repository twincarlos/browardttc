import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventPlayer } from '../../types/eventPlayerType'

interface EventPlayerState {
  collection: EventPlayer[]
}

const initialState: EventPlayerState = {
  collection: [],
}

const eventPlayerSlice = createSlice({
  name: 'eventPlayer',
  initialState,
  reducers: {
    setEventPlayers: (state, action: PayloadAction<EventPlayer[]>) => {
      state.collection = action.payload
    },
    addEventPlayer: (state, action: PayloadAction<EventPlayer>) => {
      state.collection.push(action.payload)
    },
    updateEventPlayer: (state, action: PayloadAction<EventPlayer>) => {
      const index = state.collection.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.collection[index] = action.payload
      }
    },
    deleteEventPlayer: (state, action: PayloadAction<number>) => {
      state.collection = state.collection.filter(t => t.id !== action.payload)
    },
  },
})

export const {
  setEventPlayers,
  addEventPlayer,
  updateEventPlayer,
  deleteEventPlayer,
} = eventPlayerSlice.actions

export default eventPlayerSlice.reducer