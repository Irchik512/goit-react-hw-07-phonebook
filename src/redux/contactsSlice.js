import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts, addContact, deleteContact } from "redux/operations";

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
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

  extraReducers: (builder) => {
    builder
      .addCase(getAllContacts.pending, handlePending)
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload
      })
      .addCase(getAllContacts.rejected, handleRejected)
      .addCase(addContact.pending, (state, action) => {})
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(item => item.id === action.payload.id);
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      // .addMatcher(
      //   isAnyOf(getAllContacts.pending, addContact.pending, deleteContact.pending,),
      //   (state) => {state.isLoading = true;}
      // )
      // .addMatcher(
      //   isAnyOf(getAllContacts.rejected, addContact.rejected, deleteContact.rejected,),
      //   (state, action) => {
      //     state.isLoading = false;
      //     state.error = action.payload;
      //   }
      // )
  },

});

export const contactsReduser = contactsSlice.reducer;
