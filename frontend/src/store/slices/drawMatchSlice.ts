import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { DrawMatch } from '../../types/drawMatchType'
import { RootState } from '../index';

const drawMatchAdapter = createEntityAdapter<DrawMatch>();
const initialState = drawMatchAdapter.getInitialState({
  current: null as DrawMatch | null,
});

const drawMatchSlice = createSlice({
  name: 'drawMatch',
  initialState,
  reducers: {
    setDrawMatches: (state, action) => {
      drawMatchAdapter.setAll(state, action.payload)
    },
    addDrawMatch: (state, action) => {
      drawMatchAdapter.addOne(state, action.payload)
    },
    updateDrawMatch: (state, action) => {
      drawMatchAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      })
    },
    deleteDrawMatch: (state, action) => {
      drawMatchAdapter.removeOne(state, action.payload)
    },
    setDrawMatch: (state, action) => {
      state.current = action.payload
    },
  },
})

export const {
  setDrawMatches,
  addDrawMatch,
  updateDrawMatch,
  deleteDrawMatch,
  setDrawMatch,
} = drawMatchSlice.actions

export const {
  selectById: selectDrawMatchById,
  selectIds: selectDrawMatchIds,
  selectEntities: selectAllDrawMatches,
} = drawMatchAdapter.getSelectors((state: RootState) => state.drawMatch);

export default drawMatchSlice.reducer