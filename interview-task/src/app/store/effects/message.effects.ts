import { Injectable } from '@angular/core';
import { Effect, ofType, Actions} from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { MessageService } from 'src/app/message.service';
import { Store } from '@ngrx/store';
import { EMessageActions } from '../actions/message.actions';

@Injectable()
export class MessageEffects {
  @Effect()
  message$ = this.actions$.pipe(
    ofType(EMessageActions.LoadMessage),
    switchMap(() =>
      this.messageService.getMessage()
      .pipe(
        map(data => ({ type: "[Message] Message Loaded Success", payload: {message: data} })
      ))
    )
  )

  constructor(
    private actions$: Actions,
    private messageService: MessageService,
    private _store: Store,
  ) {}
}