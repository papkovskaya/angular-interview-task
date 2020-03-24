import { createSelector } from '@ngrx/store';


const selectMessageState = (state) => state.message

export const selectMessage = createSelector(
  selectMessageState,
  (state) => state.message
)