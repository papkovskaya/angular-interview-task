import { createSelector } from '@ngrx/store';

const selectButtonsInformation = (state) => state.buttonsInformation;

export const selectAmountOfButtonsClicks = createSelector(
  selectButtonsInformation,
  (information) => information.buttonsClicks
);
