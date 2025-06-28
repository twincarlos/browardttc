import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventDraw } from '../../types/eventDrawType';
import { tournamentApi } from '../apis/tournamentApi';

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
    deleteEventDraw: (state, action: PayloadAction<number>) => {
      state.current = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tournamentApi.endpoints.getTournamentFull.matchFulfilled,
      (state, action) => {
        state.current = action.payload.eventDraw
      }
    )
  },
});

export const {
  setEventDraw,
  updateEventDraw,
  deleteEventDraw,
} = eventDrawSlice.actions;

export default eventDrawSlice.reducer;
