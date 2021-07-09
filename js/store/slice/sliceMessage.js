import {createSlice,PayloadAction} from '@reduxjs/toolkit';

const sliceMessage = createSlice({
    name: 'message',
      initialState: {
        message: 'Initial message'
      },
      reducers: {
        setMessage(state, action: PayloadAction<string>) {
          state.message = action.payload;
        }
      }
  });

export const { setMessage } = sliceMessage.actions;
export default sliceMessage.reducer;
