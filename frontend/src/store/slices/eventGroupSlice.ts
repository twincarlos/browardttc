import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { EventGroup } from '@/types/eventGroupType';
import { eventGroupApi } from '../apis/eventGroupApi';
import { RootState } from '@/store/index';

const eventGroupAdapter = createEntityAdapter<EventGroup>();
const initialState = eventGroupAdapter.getInitialState();

const eventGroupSlice = createSlice({
  name: 'eventGroup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      eventGroupApi.endpoints.getEventGroups.matchFulfilled,
      (state, { payload }) => {
        eventGroupAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      eventGroupApi.endpoints.getEventGroupsByTournamentId.matchFulfilled,
      (state, { payload }) => {
        eventGroupAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      eventGroupApi.endpoints.getEventGroupsByTournamentEventId.matchFulfilled,
      (state, { payload }) => {
        eventGroupAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      eventGroupApi.endpoints.createEventGroup.matchFulfilled,
      (state, { payload }) => {
        eventGroupAdapter.addOne(state, payload);
      },
    );
    builder.addMatcher(
      eventGroupApi.endpoints.updateEventGroup.matchFulfilled,
      (state, { payload }) => {
        eventGroupAdapter.updateOne(state, {
          id: payload.id,
          changes: payload,
        });
      },
    );
    builder.addMatcher(
      eventGroupApi.endpoints.deleteEventGroup.matchFulfilled,
      (state, { payload }) => {
        eventGroupAdapter.removeOne(state, payload);
      },
    );
  },
});

export const { selectEntities: selectAllEventGroupsByTournamentEventId } =
  eventGroupAdapter.getSelectors((state: RootState) => state.eventGroup);
export default eventGroupSlice.reducer;
