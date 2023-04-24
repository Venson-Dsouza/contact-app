import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: "active" | "inactive";
}

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactSlice.actions;

export default contactSlice.reducer;
