import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [{ title: 'Example todo', created: Date.now(), completed: null }],
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = todoSlice.actions;

export default todoSlice.reducer;
