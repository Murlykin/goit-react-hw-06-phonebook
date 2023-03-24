import { createSelector } from "@reduxjs/toolkit";

export const getFilterValue = state => state.filter;
export const getContactsValue = state => state.contacts.contacts;

export const getAllContacts = createSelector([getContactsValue, getFilterValue], (contacts, filter) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    )
});
