import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { GroupPlayer } from '../../types/groupPlayerType'
import { RootState } from '../index';

const groupPlayerAdapter = createEntityAdapter<GroupPlayer>();
const initialState = groupPlayerAdapter.getInitialState();

const groupPlayerSlice = createSlice({
  name: 'groupPlayer',
  initialState,
  reducers: {
    setGroupPlayers: (state, action) => {
      groupPlayerAdapter.setAll(state, action.payload)
    },
    addGroupPlayer: (state, action) => {
      groupPlayerAdapter.addOne(state, action.payload)
    },
    updateGroupPlayer: (state, action) => {
      groupPlayerAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      })
    },
    deleteGroupPlayer: (state, action) => {
      groupPlayerAdapter.removeOne(state, action.payload)
    },
  },
})

export const {
  selectById: selectGroupPlayerById,
  selectIds: selectGroupPlayerIds,
  selectEntities: selectAllGroupPlayers,
} = groupPlayerAdapter.getSelectors((state: RootState) => state.groupPlayer);

export default groupPlayerSlice.reducer;