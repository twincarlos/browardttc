import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventDraw } from '../../types/eventDrawType'

interface EventDrawState {
  current: EventDraw | null;
}

const initialState: EventDrawState = {
  current: null,
};

const eventDrawSlice = createSlice({
  name: 'eventDraw',
  initialState,
  reducers: {
    setEventDraw: (state, action: PayloadAction<EventDraw | null>) => {
      state.current = action.payload;
    },
    updateEventDraw: (state, action: PayloadAction<EventDraw>) => {
      state.current = action.payload;
    },
    deleteEventDraw: (state) => {
      state.current = null;
    },
  },
});

export const {
  setEventDraw,
  updateEventDraw,
  deleteEventDraw,
} = eventDrawSlice.actions;

export default eventDrawSlice.reducer;
