import { configureStore } from '@reduxjs/toolkit'
import tournamentReducer from './slices/tournamentSlice'
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
import { tournamentApi } from './apis/tournamentApi'
import { tournamentEventApi } from './apis/tournamentEventApi'
import { eventGroupApi } from './apis/eventGroupApi'
import { tournamentPlayerApi } from './apis/tournamentPlayerApi'
import { eventPlayerApi } from './apis/eventPlayerApi'
import { groupPlayerApi } from './apis/groupPlayerApi'

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
    [tournamentEventApi.reducerPath]: tournamentEventApi.reducer,
    [eventGroupApi.reducerPath]: eventGroupApi.reducer,
    [tournamentPlayerApi.reducerPath]: tournamentPlayerApi.reducer,
    [eventPlayerApi.reducerPath]: eventPlayerApi.reducer,
    [groupPlayerApi.reducerPath]: groupPlayerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tournamentApi.middleware, 
      tournamentEventApi.middleware, 
      eventGroupApi.middleware,
      tournamentPlayerApi.middleware,
      eventPlayerApi.middleware,
      groupPlayerApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch