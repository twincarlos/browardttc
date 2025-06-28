import { configureStore } from '@reduxjs/toolkit'
import tournamentReducer from './slices/tournamentSlice'
import { tournamentApi } from './apis/tournamentApi'
import tournamentEventReducer from './slices/tournamentEventSlice'
import tournamentPlayerReducer from './slices/tournamentPlayerSlice'
import tournamentTableReducer from './slices/tournamentTableSlice'
import eventPlayerReducer from './slices/eventPlayerSlice'
import eventGroupReducer from './slices/eventGroupSlice'
import eventDrawReducer from './slices/eventDrawSlice'
import groupPlayerReducer from './slices/groupPlayerSlice'
import drawPlayerReducer from './slices/drawPlayerSlice'
import groupMatchReducer from './slices/groupMatchSlice'
import drawMatchReducer from './slices/drawMatchSlice'
import groupMatchTableReducer from './slices/groupMatchTableSlice'
import drawMatchTableReducer from './slices/drawMatchTableSlice'

export const store = configureStore({
  reducer: {
    tournament: tournamentReducer,
    tournamentEvent: tournamentEventReducer,
    tournamentPlayer: tournamentPlayerReducer,
    tournamentTable: tournamentTableReducer,
    eventPlayer: eventPlayerReducer,
    eventGroup: eventGroupReducer,
    eventDraw: eventDrawReducer,
    groupPlayer: groupPlayerReducer,
    drawPlayer: drawPlayerReducer,
    groupMatch: groupMatchReducer,
    drawMatch: drawMatchReducer,
    groupMatchTable: groupMatchTableReducer,
    drawMatchTable: drawMatchTableReducer,
    [tournamentApi.reducerPath]: tournamentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tournamentApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch