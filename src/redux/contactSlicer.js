import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state,action){
      state.isLoading=false
      state.error=action.payload
    }
  },
  // reducers: {
  //   fetchingInProgress(state, action) {
  //     state.isLoading = true;
  //   },
  //   fetchingSucess(state, action) {
  //     state.isLoading = false;
  //     state.error = false;
  //     state.contacts = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   deleteContact(state, action) {
  //     const index = state.findIndex(task => task.id === action.payload);
  //     state.splice(index, 1);
  //   },
  // },
});

// Generatory akcji
export const { fetchingError, fetchingInProgress, fetchingSucess } =
  contactsSlice.actions;
// Reducer slice'u
export const contactsReducer = contactsSlice.reducer;
