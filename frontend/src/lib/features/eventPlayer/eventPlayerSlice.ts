import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventPlayer } from './eventPlayerType'

interface EventPlayerState {
  eventPlayers: EventPlayer[]
}

const initialState: EventPlayerState = {
  eventPlayers: [],
}

const eventPlayerSlice = createSlice({
  name: 'eventPlayer',
  initialState,
  reducers: {
    setEventPlayers: (state, action: PayloadAction<EventPlayer[]>) => {
      state.eventPlayers = action.payload
    },
    addEventPlayer: (state, action: PayloadAction<EventPlayer>) => {
      state.eventPlayers.push(action.payload)
    },
    updateEventPlayer: (state, action: PayloadAction<EventPlayer>) => {
      const index = state.eventPlayers.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.eventPlayers[index] = action.payload
      }
    },
    deleteEventPlayer: (state, action: PayloadAction<number>) => {
      state.eventPlayers = state.eventPlayers.filter(t => t.id !== action.payload)
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