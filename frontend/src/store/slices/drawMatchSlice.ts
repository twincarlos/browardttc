import {
  createSlice,
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { DrawMatch } from '../../types/drawMatchType';
import { drawMatchApi } from '../apis/drawMatchApi';
import { RootState } from '../index';

const drawMatchAdapter = createEntityAdapter<DrawMatch>();
const initialState = drawMatchAdapter.getInitialState();

const drawMatchSlice = createSlice({
  name: 'drawMatch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      drawMatchApi.endpoints.getDrawMatches.matchFulfilled,
      (state, { payload }) => {
        drawMatchAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      drawMatchApi.endpoints.getDrawMatchesByTournamentId.matchFulfilled,
      (state, { payload }) => {
        drawMatchAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      drawMatchApi.endpoints.getDrawMatchesByTournamentEventId
        .matchFulfilled,
      (state, { payload }) => {
        drawMatchAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      drawMatchApi.endpoints.getDrawMatchesByEventDrawId.matchFulfilled,
      (state, { payload }) => {
        drawMatchAdapter.setAll(state, payload);
      },
    );
    builder.addMatcher(
      drawMatchApi.endpoints.createDrawMatch.matchFulfilled,
      (state, { payload }) => {
        drawMatchAdapter.addOne(state, payload);
      },
    );
    builder.addMatcher(
      drawMatchApi.endpoints.updateDrawMatch.matchFulfilled,
      (state, { payload }) => {
        drawMatchAdapter.updateOne(state, {
          id: payload.id,
          changes: payload,
        });
      },
    );
    builder.addMatcher(
      drawMatchApi.endpoints.deleteDrawMatch.matchFulfilled,
      (state, { payload }) => {
        drawMatchAdapter.removeOne(state, payload);
      },
    );
  },
});

export const selectDrawMatchesByEventDrawId = (eventDrawId: number) =>
  createSelector([selectAllDrawMatches], (drawMatches) => {
    const filteredMatches = drawMatches.filter((dm) => dm.event_draw_id === eventDrawId);
    
    // Group by round
    const groupedByRound = filteredMatches.reduce((acc, match) => {
      const round = match.round;
      if (!acc[round]) {
        acc[round] = [];
      }
      acc[round].push(match);
      return acc;
    }, {} as Record<number, DrawMatch[]>);
    
    // Convert to 2D array, sorted by round
    return Object.keys(groupedByRound)
      .sort((a, b) => Number(a) - Number(b))
      .map(round => groupedByRound[Number(round)]);
  });

export const { selectAll: selectAllDrawMatches } =
  drawMatchAdapter.getSelectors((state: RootState) => state.drawMatch);

export default drawMatchSlice.reducer;