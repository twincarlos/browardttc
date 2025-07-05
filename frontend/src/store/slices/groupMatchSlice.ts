import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import { GroupMatch } from '../../types/groupMatchType';
import { groupMatchApi } from '../apis/groupMatchApi';
import { RootState } from '../index';

const groupMatchAdapter = createEntityAdapter<GroupMatch>();
const initialState = groupMatchAdapter.getInitialState();

const groupMatchSlice = createSlice({
  name: 'groupMatch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      groupMatchApi.endpoints.getGroupMatches.matchFulfilled,
      (state, { payload }) => {
        groupMatchAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      groupMatchApi.endpoints.getGroupMatchesByTournamentId.matchFulfilled,
      (state, { payload }) => {
        groupMatchAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      groupMatchApi.endpoints.getGroupMatchesByTournamentEventId
        .matchFulfilled,
      (state, { payload }) => {
        groupMatchAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      groupMatchApi.endpoints.getGroupMatchesByEventGroupId.matchFulfilled,
      (state, { payload }) => {
        groupMatchAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      groupMatchApi.endpoints.createGroupMatch.matchFulfilled,
      (state, { payload }) => {
        groupMatchAdapter.addOne(state, payload);
      },
    );
    builder.addMatcher(
      groupMatchApi.endpoints.updateGroupMatch.matchFulfilled,
      (state, { payload }) => {
        groupMatchAdapter.updateOne(state, {
          id: payload.id,
          changes: payload,
        });
      },
    );
    builder.addMatcher(
      groupMatchApi.endpoints.deleteGroupMatch.matchFulfilled,
      (state, { payload }) => {
        groupMatchAdapter.removeOne(state, payload);
      },
    );
  },
});

export const selectGroupMatchesByEventGroupId = (eventGroupId: number) =>
  createSelector([selectAllGroupMatches], (groupMatches) =>
    groupMatches.filter((gm) => gm.event_group_id === eventGroupId),
  );

export const { selectAll: selectAllGroupMatches } =
  groupMatchAdapter.getSelectors((state: RootState) => state.groupMatch);

export default groupMatchSlice.reducer;