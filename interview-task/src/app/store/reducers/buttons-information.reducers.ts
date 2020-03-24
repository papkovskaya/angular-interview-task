import { EButtonsInformationActions } from './../actions/buttons-information.actions';
import { ButtonsInformationActions } from './../actions/buttons-information.actions';
import { initialButtonsInformationState } from './../state/buttons-information.state';

export const buttonsInformationReducers = (
  state = initialButtonsInformationState,
  action: ButtonsInformationActions
) => {
  switch (action.type) {
    case EButtonsInformationActions.UpdateAmountOfClicks: {
      return {
        ...state,
        buttonsClicks: state.buttonsClicks + action.payload
      };
    }

    default:
      return state;
  }
}