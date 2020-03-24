import { Action } from '@ngrx/store';


export enum EMessageActions {
  LoadMessage = '[Message] Load Message',
  MessageLoadedSuccess = '[Message] Message Loaded Success',
  MessageLoadedError = '[Message] Message Loaded Error'
}
 
export class LoadMessage implements Action {
  public readonly type = EMessageActions.LoadMessage
}

export class MessageLoadedSuccess implements Action {
  public readonly type = EMessageActions.MessageLoadedSuccess

  constructor(public payload: { message: string }) {}
}

export class MessageLoadedError implements Action {
  public readonly type = EMessageActions.MessageLoadedError
}

export type MessageActions =
  | LoadMessage
  | MessageLoadedSuccess
  | MessageLoadedError