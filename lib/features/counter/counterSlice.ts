import { Counter } from '@/app/models/counter';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  counter: Counter;
};

const initialState: CounterState = {
  counter: {
    value: 0
  }
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.counter.value += action.payload;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;