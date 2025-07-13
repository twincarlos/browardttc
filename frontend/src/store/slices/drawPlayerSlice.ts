import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import { DrawPlayer } from '../../types/drawPlayerType';
import { drawPlayerApi } from '../apis/drawPlayerApi';
import { RootState } from '../index';

const drawPlayerAdapter = createEntityAdapter<DrawPlayer>();
const initialState = drawPlayerAdapter.getInitialState();

const drawPlayerSlice = createSlice({
  name: 'drawPlayer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      drawPlayerApi.endpoints.getDrawPlayers.matchFulfilled,
      (state, { payload }) => {
        drawPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      drawPlayerApi.endpoints.getDrawPlayersByTournamentId.matchFulfilled,
      (state, { payload }) => {
        drawPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      drawPlayerApi.endpoints.getDrawPlayersByTournamentEventId
        .matchFulfilled,
      (state, { payload }) => {
        drawPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      drawPlayerApi.endpoints.getDrawPlayersByEventDrawId.matchFulfilled,
      (state, { payload }) => {
        drawPlayerAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      drawPlayerApi.endpoints.createDrawPlayer.matchFulfilled,
      (state, { payload }) => {
        drawPlayerAdapter.addOne(state, payload);
      },
    );
    builder.addMatcher(
      drawPlayerApi.endpoints.updateDrawPlayer.matchFulfilled,
      (state, { payload }) => {
        drawPlayerAdapter.updateOne(state, {
          id: payload.id,
          changes: payload,
        });
      },
    );
    builder.addMatcher(
      drawPlayerApi.endpoints.deleteDrawPlayer.matchFulfilled,
      (state, { payload }) => {
        drawPlayerAdapter.removeOne(state, payload);
      },
    );
  },
});

export const selectDrawPlayersByEventDrawId = (eventDrawId: number) =>
  createSelector([selectAllDrawPlayers], (drawPlayers) =>
    drawPlayers.filter((gp) => gp.event_draw_id === eventDrawId),
  );

export const { selectAll: selectAllDrawPlayers, selectById: selectDrawPlayerById } =
  drawPlayerAdapter.getSelectors((state: RootState) => state.drawPlayer);

export default drawPlayerSlice.reducer;
