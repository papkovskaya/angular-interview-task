import { EButtonsInformationActions } from './../actions/buttons-information.actions';
import { ButtonsInformationActions } from './../actions/buttons-information.actions';
import { initialButtonsInformationState } from './../state/buttons-information.state';

export const buttonsInformationReducers = (
  state = initialButtonsInformationState,
  action: ButtonsInformationActions
) => {
  debugger;
  switch (action.type) {
    case EButtonsInformationActions.UpdateAmountOfClicks: {
      debugger;
      return {
        ...state,
        buttonsClicks: state.buttonsClicks + action.payload
      };
    }

    default:
      return state;
  }
}