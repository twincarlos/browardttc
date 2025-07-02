import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { EventPlayer } from '../../types/eventPlayerType'
import { RootState } from '../index';

const eventPlayerAdapter = createEntityAdapter<EventPlayer>();
const initialState = eventPlayerAdapter.getInitialState();

const eventPlayerSlice = createSlice({
  name: 'eventPlayer',
  initialState,
  reducers: {
    setEventPlayers: (state, action) => {
      eventPlayerAdapter.setAll(state, action.payload)
    },
    addEventPlayer: (state, action) => {
      eventPlayerAdapter.addOne(state, action.payload)
    },
    updateEventPlayer: (state, action) => {
      eventPlayerAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      })
    },
    deleteEventPlayer: (state, action) => {
      eventPlayerAdapter.removeOne(state, action.payload)
    },
  },
})

export const {
  setEventPlayers,
  addEventPlayer,
  updateEventPlayer,
  deleteEventPlayer,
} = eventPlayerSlice.actions

export const {
  selectById: selectEventPlayerById,
  selectIds: selectEventPlayerIds,
  selectEntities: selectAllEventPlayers,
} = eventPlayerAdapter.getSelectors((state: RootState) => state.eventPlayer);

export default eventPlayerSlice.reducer