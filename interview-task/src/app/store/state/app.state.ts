import { initialButtonsInformationState } from './buttons-information.state';
import { messageReducer } from '../reducers/message.reducer';


export const initialAppState = {
  buttonsInformation: initialButtonsInformationState,
  message: messageReducer
}

export function getInitialState() {
  return initialAppState;
}