import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TournamentEvent } from '../../types/tournamentEventType'
import { tournamentApi } from '../apis/tournamentApi'

interface TournamentEventState {
  collection: TournamentEvent[]
  current: TournamentEvent | null
}

const initialState: TournamentEventState = {
  collection: [],
  current: null,
}

const tournamentEventSlice = createSlice({
  name: 'tournamentEvent',
  initialState,
  reducers: {
    setTournamentEvents: (state, action: PayloadAction<TournamentEvent[]>) => {
      state.collection = action.payload
    },
    addTournamentEvent: (state, action: PayloadAction<TournamentEvent>) => {
      state.collection.push(action.payload)
    },
    updateTournamentEvent: (state, action: PayloadAction<TournamentEvent>) => {
      const index = state.collection.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.collection[index] = action.payload
      }
    },
    deleteTournamentEvent: (state, action: PayloadAction<number>) => {
      state.collection = state.collection.filter(t => t.id !== action.payload)
    },
    setTournamentEvent: (state, action: PayloadAction<TournamentEvent | null>) => {
      state.current = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.collection = action.payload.tournamentEvents
      }
    )
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