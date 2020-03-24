import { Action } from '@ngrx/store';


export enum EButtonsInformationActions {
  UpdateAmountOfClicks = '[Button] Update Amount Of Clicks',
}

export class UpdateAmountOfClicks implements Action {
  public readonly type = EButtonsInformationActions.UpdateAmountOfClicks;
  constructor(public payload: number) {}
}

export type ButtonsInformationActions = UpdateAmountOfClicks;