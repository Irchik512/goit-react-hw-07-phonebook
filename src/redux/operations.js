import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://64299bbe5a40b82da4d6a8e2.mockapi.io/contacts";

export const getAllContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
  const response = await axios.get("/contacts");
  return response.data;   
} catch (e) {
  return thunkAPI.rejectWithValue(e.message);
}
});

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { ...newContact });
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

