import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventGroup } from './eventGroupType'

interface EventGroupState {
  eventGroups: EventGroup[]
}

const initialState: EventGroupState = {
  eventGroups: [],
}

const eventGroupSlice = createSlice({
  name: 'eventGroup',
  initialState,
  reducers: {
    setEventGroups: (state, action: PayloadAction<EventGroup[]>) => {
      state.eventGroups = action.payload
    },
    addEventGroup: (state, action: PayloadAction<EventGroup>) => {
      state.eventGroups.push(action.payload)
    },
    updateEventGroup: (state, action: PayloadAction<EventGroup>) => {
      const index = state.eventGroups.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.eventGroups[index] = action.payload
      }
    },
    deleteEventGroup: (state, action: PayloadAction<number>) => {
      state.eventGroups = state.eventGroups.filter(t => t.id !== action.payload)
    },
  },
})

export const {
  setEventGroups,
  addEventGroup,
  updateEventGroup,
  deleteEventGroup,
} = eventGroupSlice.actions

export default eventGroupSlice.reducer