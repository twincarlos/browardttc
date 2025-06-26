import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Enums matching the backend schema
export type TournamentStatus = 'upcoming' | 'open' | 'closed' | 'in_progress' | 'finished'
export type EventStatus = 'upcoming' | 'in_progress' | 'finished'
export type EventStage = 'groups' | 'draw'
export type EventType = 'singles' | 'teams' | 'doubles'
export type EventFormat = 'rr' | 'grr' | 'single_elimination' | 'handicap'

export interface Tournament {
  id: number
  name: string
  status: TournamentStatus
  registration_deadline?: string // date string
  rating_cutoff?: string // date string
  date?: string // date string
  time?: string // time string
  created_at: string
  updated_at: string
}

export interface TournamentEvent {
  id: number
  name: string
  date?: string
  time?: string
  entry_fee?: string // numeric as string
  tournament_id: number
  max_players?: number
  status: EventStatus
  stage?: EventStage
  type: EventType
  format: EventFormat
  max_rating?: number
  min_age?: number
  max_age?: number
  unrated_may_advance: boolean
  created_at: string
  updated_at: string
}

export interface TournamentPlayer {
  id: number
  name: string
  birthday?: string
  usatt?: number
  tournament_rating: number
  actual_rating: number
  club?: string
  location?: string
  tournament_id: number
  created_at: string
  updated_at: string
}

export interface TournamentTable {
  id: number
  number: number
  tournament_id: number
  created_at: string
  updated_at: string
}

interface TournamentState {
  tournaments: Tournament[]
  currentTournament: Tournament | null
  tournamentEvents: TournamentEvent[]
  tournamentPlayers: TournamentPlayer[]
  tournamentTables: TournamentTable[]
  loading: boolean
  error: string | null
}

const initialState: TournamentState = {
  tournaments: [],
  currentTournament: null,
  tournamentEvents: [],
  tournamentPlayers: [],
  tournamentTables: [],
  loading: false,
  error: null,
}

const tournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    setTournaments: (state, action: PayloadAction<Tournament[]>) => {
      state.tournaments = action.payload
    },
    addTournament: (state, action: PayloadAction<Tournament>) => {
      state.tournaments.push(action.payload)
    },
    updateTournament: (state, action: PayloadAction<Tournament>) => {
      const index = state.tournaments.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.tournaments[index] = action.payload
      }
    },
    deleteTournament: (state, action: PayloadAction<number>) => {
      state.tournaments = state.tournaments.filter(t => t.id !== action.payload)
    },
    setCurrentTournament: (state, action: PayloadAction<Tournament | null>) => {
      state.currentTournament = action.payload
    },
    // Tournament Events
    setTournamentEvents: (state, action: PayloadAction<TournamentEvent[]>) => {
      state.tournamentEvents = action.payload
    },
    addTournamentEvent: (state, action: PayloadAction<TournamentEvent>) => {
      state.tournamentEvents.push(action.payload)
    },
    updateTournamentEvent: (state, action: PayloadAction<TournamentEvent>) => {
      const index = state.tournamentEvents.findIndex(e => e.id === action.payload.id)
      if (index !== -1) {
        state.tournamentEvents[index] = action.payload
      }
    },
    deleteTournamentEvent: (state, action: PayloadAction<number>) => {
      state.tournamentEvents = state.tournamentEvents.filter(e => e.id !== action.payload)
    },
    // Tournament Players
    setTournamentPlayers: (state, action: PayloadAction<TournamentPlayer[]>) => {
      state.tournamentPlayers = action.payload
    },
    addTournamentPlayer: (state, action: PayloadAction<TournamentPlayer>) => {
      state.tournamentPlayers.push(action.payload)
    },
    updateTournamentPlayer: (state, action: PayloadAction<TournamentPlayer>) => {
      const index = state.tournamentPlayers.findIndex(p => p.id === action.payload.id)
      if (index !== -1) {
        state.tournamentPlayers[index] = action.payload
      }
    },
    deleteTournamentPlayer: (state, action: PayloadAction<number>) => {
      state.tournamentPlayers = state.tournamentPlayers.filter(p => p.id !== action.payload)
    },
    // Tournament Tables
    setTournamentTables: (state, action: PayloadAction<TournamentTable[]>) => {
      state.tournamentTables = action.payload
    },
    addTournamentTable: (state, action: PayloadAction<TournamentTable>) => {
      state.tournamentTables.push(action.payload)
    },
    updateTournamentTable: (state, action: PayloadAction<TournamentTable>) => {
      const index = state.tournamentTables.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.tournamentTables[index] = action.payload
      }
    },
    deleteTournamentTable: (state, action: PayloadAction<number>) => {
      state.tournamentTables = state.tournamentTables.filter(t => t.id !== action.payload)
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

export const {
  setLoading,
  setError,
  setTournaments,
  addTournament,
  updateTournament,
  deleteTournament,
  setCurrentTournament,
  // Tournament Events
  setTournamentEvents,
  addTournamentEvent,
  updateTournamentEvent,
  deleteTournamentEvent,
  // Tournament Players
  setTournamentPlayers,
  addTournamentPlayer,
  updateTournamentPlayer,
  deleteTournamentPlayer,
  // Tournament Tables
  setTournamentTables,
  addTournamentTable,
  updateTournamentTable,
  deleteTournamentTable,
  clearError,
} = tournamentSlice.actions

export default tournamentSlice.reducer 