import { MessageActions } from '../actions/message.actions'
import { EMessageActions } from '../actions/message.actions'
import { initialMessageState } from '../state/message.state';


export function messageReducer(
  state = initialMessageState,
  action: MessageActions
) {
  switch (action.type) {
    case EMessageActions.MessageLoadedSuccess:
      return {
        ...state,
        message: action.payload.message
      }
    case EMessageActions.MessageLoadedError:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}