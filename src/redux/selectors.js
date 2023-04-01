import { createSelector } from '@reduxjs/toolkit';
export const getFilterValue = state => state.filter;
export const getContactValue = state => state.contacts;

export const getFilteredContacts = createSelector(
  [getContactValue, getFilterValue],
  (contacts, value) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase().trim())
    );
  }
);
