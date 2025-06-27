import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TournamentEvent } from './tournamentEventType'

interface TournamentEventState {
  tournamentEvents: TournamentEvent[]
  tournamentEvent: TournamentEvent | null
}

const initialState: TournamentEventState = {
  tournamentEvents: [],
  tournamentEvent: null,
}

const tournamentEventSlice = createSlice({
  name: 'tournamentEvent',
  initialState,
  reducers: {
    setTournamentEvents: (state, action: PayloadAction<TournamentEvent[]>) => {
      state.tournamentEvents = action.payload
    },
    addTournamentEvent: (state, action: PayloadAction<TournamentEvent>) => {
      state.tournamentEvents.push(action.payload)
    },
    updateTournamentEvent: (state, action: PayloadAction<TournamentEvent>) => {
      const index = state.tournamentEvents.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.tournamentEvents[index] = action.payload
      }
    },
    deleteTournamentEvent: (state, action: PayloadAction<number>) => {
      state.tournamentEvents = state.tournamentEvents.filter(t => t.id !== action.payload)
    },
    setTournamentEvent: (state, action: PayloadAction<TournamentEvent | null>) => {
      state.tournamentEvent = action.payload
    },
  },
})

export const {
  setTournamentEvents,
  addTournamentEvent,
  updateTournamentEvent,
  deleteTournamentEvent,
  setTournamentEvent,
} = tournamentEventSlice.actions

export default tournamentEventSlice.reducer 