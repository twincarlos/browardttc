import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import { GroupPlayer } from '../../types/groupPlayerType';
import { groupPlayerApi } from '../apis/groupPlayerApi';
import { RootState } from '../index';

const groupPlayerAdapter = createEntityAdapter<GroupPlayer>();
const initialState = groupPlayerAdapter.getInitialState();

const groupPlayerSlice = createSlice({
  name: 'groupPlayer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      groupPlayerApi.endpoints.getGroupPlayers.matchFulfilled,
      (state, { payload }) => {
        groupPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      groupPlayerApi.endpoints.getGroupPlayersByTournamentId.matchFulfilled,
      (state, { payload }) => {
        groupPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      groupPlayerApi.endpoints.getGroupPlayersByTournamentEventId
        .matchFulfilled,
      (state, { payload }) => {
        groupPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      groupPlayerApi.endpoints.getGroupPlayersByEventGroupId.matchFulfilled,
      (state, { payload }) => {
        groupPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      groupPlayerApi.endpoints.createGroupPlayer.matchFulfilled,
      (state, { payload }) => {
        groupPlayerAdapter.addOne(state, payload);
      },
    );
    builder.addMatcher(
      groupPlayerApi.endpoints.updateGroupPlayer.matchFulfilled,
      (state, { payload }) => {
        groupPlayerAdapter.updateOne(state, {
          id: payload.id,
          changes: payload,
        });
      },
    );
    builder.addMatcher(
      groupPlayerApi.endpoints.deleteGroupPlayer.matchFulfilled,
      (state, { payload }) => {
        groupPlayerAdapter.removeOne(state, payload);
      },
    );
  },
});

export const selectGroupPlayersByEventGroupId = (eventGroupId: number) =>
  createSelector([selectAllGroupPlayers], (groupPlayers) =>
    groupPlayers.filter((gp) => gp.event_group_id === eventGroupId),
  );

export const { selectAll: selectAllGroupPlayers, selectById: selectGroupPlayerById } =
  groupPlayerAdapter.getSelectors((state: RootState) => state.groupPlayer);

export default groupPlayerSlice.reducer;
