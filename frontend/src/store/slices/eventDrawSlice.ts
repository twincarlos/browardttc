import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventDraw } from '../../types/eventDrawType';

interface EventDrawState {
  eventDraw: EventDraw | null;
}

const initialState: EventDrawState = {
  eventDraw: null,
};

const eventDrawSlice = createSlice({
  name: 'eventDraw',
  initialState,
  reducers: {
    setEventDraw: (state, action: PayloadAction<EventDraw | null>) => {
      state.eventDraw = action.payload;
    },
    updateEventDraw: (state, action: PayloadAction<EventDraw>) => {
      state.eventDraw = action.payload;
    },
    deleteEventDraw: (state, action: PayloadAction<number>) => {
      state.eventDraw = null;
    },
  },
});

export const {
  setEventDraw,
  updateEventDraw,
  deleteEventDraw,
} = eventDrawSlice.actions;

export default eventDrawSlice.reducer;
