import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts, addContact, deleteContact } from "redux/operations";

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};



export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getAllContacts.pending]: handlePending,
    [getAllContacts.fulfilled]: (state, action)=>{
      state.isLoading = false;
      state.error = null;
      state.items = action.payload
    },
    [getAllContacts.rejected]: handleRejected,   
    
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action)=>{
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, action)=>{
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(item => item.id === action.payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },


});

export const contactsReduser = contactsSlice.reducer;
