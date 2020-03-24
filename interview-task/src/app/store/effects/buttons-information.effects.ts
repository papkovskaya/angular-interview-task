import { Injectable } from '@angular/core';
import { Effect, ofType, Actions} from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import {
  UpdateAmountOfClicks,
  EButtonsInformationActions
} from '../actions/buttons-information.actions';
import { selectAmountOfButtonsClicks } from '../selectors/buttons-information.selector';


@Injectable()
export class ButtonsInformationEffects {
  constructor(
    private _actions$: Actions,
    private _store$: Store,
  ) {}

  // @Effect()
  // updateButtonsClicks = this._actions$.pipe(
  //   ofType(EButtonsInformationActions.UpdateAmountOfClicks),
  // )

}