import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventPlayer } from '../../types/eventPlayerType'
import { tournamentApi } from '../apis/tournamentApi'

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
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.eventPlayers = action.payload.eventPlayers
      }
    )
  },
})

export const {
  setEventPlayers,
  addEventPlayer,
  updateEventPlayer,
  deleteEventPlayer,
} = eventPlayerSlice.actions

export default eventPlayerSlice.reducer