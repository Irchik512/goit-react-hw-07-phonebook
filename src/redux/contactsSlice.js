import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
