import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventGroup } from '../../types/eventGroupType'

interface EventGroupState {
  collection: EventGroup[]
}

const initialState: EventGroupState = {
  collection: [],
}

const eventGroupSlice = createSlice({
  name: 'eventGroup',
  initialState,
  reducers: {
    setEventGroups: (state, action: PayloadAction<EventGroup[]>) => {
      state.collection = action.payload
    },
    addEventGroup: (state, action: PayloadAction<EventGroup>) => {
      state.collection.push(action.payload)
    },
    updateEventGroup: (state, action: PayloadAction<EventGroup>) => {
      const index = state.collection.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.collection[index] = action.payload
      }
    },
    deleteEventGroup: (state, action: PayloadAction<number>) => {
      state.collection = state.collection.filter(t => t.id !== action.payload)
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